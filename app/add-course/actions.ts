"use server";

import { redirect } from "next/navigation";
import prisma from "../../lib/db/prisma";

export async function addCourse(formData: FormData) {
  const Description = formData.get("description")?.toString();
  const Image_url = formData.get("image-url")?.toString();
  const lesson1 = formData.get("lesson-1")?.toString();
  const lesson2 = formData.get("lesson-2")?.toString();
  const lesson3 = formData.get("lesson-3")?.toString();
  const lesson4 = formData.get("lesson-4")?.toString();
  const lesson5 = formData.get("lesson-5")?.toString();
  const lesson6 = formData.get("lesson-6")?.toString();
  let Lessons;

  if (lesson1 && lesson2 && lesson3 && lesson4 && lesson5 && lesson6) {
    Lessons = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];
  }

  const Topic = formData.get("topic")?.toString();

  if (
    !Description ||
    !Image_url ||
    !lesson1 ||
    !lesson2 ||
    !lesson3 ||
    !lesson4 ||
    !lesson5 ||
    !lesson6 ||
    !Topic
  ) {
    throw Error("Missing required fields");
  }

 
    await prisma?.course.create({
      data: { Description, Image_url, Lessons, Topic },
    });
  

  redirect("/");
}
