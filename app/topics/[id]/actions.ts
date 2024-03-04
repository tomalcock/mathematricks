"use server";

import { createMyCourses, getMyCourses } from "@/lib/db/mycourses";
import { revalidatePath } from "next/cache";

export async function incrementCourseQuantity(courseId: string) {
  const myCourses = (await getMyCourses()) ?? (await createMyCourses());

  const articleInMyCourses = myCourses.courses.find(
    (course) => course.courseId === courseId
  );

  if (articleInMyCourses) {
    return false
  } else {
    await prisma?.myCoursesItem.create({
      data: {
        myCoursesId: myCourses.id,
        courseId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/courses/[id]", 'page');
}
