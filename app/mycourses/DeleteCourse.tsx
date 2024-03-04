"use server";

import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export default async function DeleteCourse(courseid: string) {
  {
    console.log(courseid + "- this is the course id");
  }

  await prisma.myCoursesItem.deleteMany({
    where: {
      courseId: courseid,
    },
  });

  redirect("/mycourses");
}
