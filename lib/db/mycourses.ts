import { MyCourses, MyCoursesItem, Prisma } from "@prisma/client";
import prisma from "./prisma";
import { cookies } from "next/dist/client/components/headers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export type MyCoursesWithCourses = Prisma.MyCoursesGetPayload<{
  include: { courses: { include: { course: true } } };
}>;

export type mycoursesItemWithCourse = Prisma.MyCoursesItemGetPayload<{
  include: { course: true };
}>;

export type MyMathsCourses = MyCoursesWithCourses & {
  size: number;
};

export async function getMyCourses(): Promise<MyMathsCourses | null> {
  const session = await getServerSession(authOptions);

  let myCourses: MyCoursesWithCourses | null = null;

  if (session) {
    myCourses = await prisma.myCourses.findFirst({
      where: { userId: session.user.id },
      include: { courses: { include: { course: true } } },
    });
  } else {
    const localMyCoursesId = cookies().get("localMyCoursesId")?.value;
    myCourses = localMyCoursesId
      ? await prisma.myCourses.findUnique({
          where: { id: localMyCoursesId },
          include: { courses: { include: { course: true } } },
        })
      : null;
  }

  if (!myCourses) {
    return null;
  }

  return {
    ...myCourses,
    size: myCourses.courses.reduce((acc, item) => acc + item.quantity, 0),
  };
}

export async function createMyCourses(): Promise<MyMathsCourses> {
  const session = await getServerSession(authOptions);

  let newMyCourses: MyCourses;

  if (session) {
    newMyCourses = await prisma.myCourses.create({
      data: { userId: session.user.id },
    });
  } else {
    newMyCourses = await prisma?.myCourses.create({
      data: {},
    });

    //Note: Needs encryption + secure settings in real production app

    cookies().set("localMyCoursesId", newMyCourses.id);
  }

  return {
    ...newMyCourses,
    courses: [],
    size: 0,
  };
}

export async function mergeAnonymousMyCoursesIntoUserCart(userId: string) {
  const localMyCoursesId = cookies().get("localMyCoursesId")?.value;
  const localMyCourses = localMyCoursesId
    ? await prisma.myCourses.findUnique({
        where: { id: localMyCoursesId },
        include: { courses: true },
      })
    : null;

  if (!localMyCourses) return;

  const userMyCourses = await prisma.myCourses.findFirst({
    where: { userId },
    include: { courses: true },
  });

  await prisma.$transaction(async (tx) => {
    if (userMyCourses) {
      const mergedMyCoursesItems = mergeMyCoursesItems(
        localMyCourses.courses,
        userMyCourses.courses
      );
      await tx.myCoursesItem.deleteMany({
        where: { myCoursesId: userMyCourses.id },
      });

      await tx.myCoursesItem.createMany({
        data: mergedMyCoursesItems.map((course) => ({
          myCoursesId: userMyCourses.id,
          courseId: course.courseId,
          quantity: course.quantity,
        })),
      });
    } else {
      await tx.myCourses.create({
        data: {
          userId,
          courses: {
            createMany: {
              data: localMyCourses.courses.map((course) => ({
                courseId: course.courseId,
                quantity: course.quantity,
              })),
            },
          },
        },
      });
    }

    await tx.myCourses.delete({
      where: { id: localMyCourses.id },
    });

    cookies().set("localCartId", "");
  });
}

function mergeMyCoursesItems(...myCoursesItems: MyCoursesItem[][]) {
  return myCoursesItems.reduce((acc, courses) => {
    courses.forEach((course) => {
      const existingCourse = acc.find((i) => i.courseId === course.courseId);
      if (existingCourse) {
        return;
      } else {
        acc.push(course);
      }
    });
    return acc;
  }, [] as MyCoursesItem[]);
}
