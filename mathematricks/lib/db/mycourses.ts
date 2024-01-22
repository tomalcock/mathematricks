import prisma from "./prisma";
import { cookies } from "next/dist/client/components/headers";

export type MyMathsCourses = 

// export async function getMyCourses() {
//   const localMyCoursesId = cookies().get("localMyCoursesId")?.value;
//   const myCourses = localMyCoursesId
//     ? await prisma.myCourses.findUnique({
//         where: { id: localMyCoursesId },
//         include: { courses: { include: { course: true } } },
//       })
//     : null;

//     if(!myCourses) {
//         return null
//     }

//     return {
//         ...myCourses,
//         size: myCourses.courses.reduce((acc,item) => acc + item.quantity, 0)
//     }
// }

// export async function createMyCourses() {
//   const newMyCourses = await prisma?.myCourses.create({
//     data: {},
//   });

//   //Note: Needs encryption + secure settings in real production app

//   cookies().set("localMyCoursesId", newMyCourses.id);
// }
