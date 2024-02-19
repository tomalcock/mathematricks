import { notFound } from "next/navigation";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { cache } from "react";
import { Metadata } from "next";
import LessonLink from "@/components/LessonLink";
import AddToMyCoursesButton from "./AddToMyCoursesButton";
import { incrementCourseQuantity } from "./actions";

interface TopicPageProps {
  params: {
    id: string;
  };
}

const getCourse = cache(async (id: string) => {
  const topic = await prisma.course.findUnique({ where: { id } });

  if (!topic) notFound();

  return topic;
});

export async function generateMetadata({
  params: { id },
}: TopicPageProps): Promise<Metadata> {
  const topic = await getCourse(id);

  return {
    title: topic.Topic + "- Mathematricks",
    description: topic.Description,
    openGraph: {
      images: [{ url: topic.Image_url }],
    },
  };
}

export default async function TopicPage({ params: { id } }: TopicPageProps) {
  const topic = await getCourse(id);
  return (
    <div className="flex flex-col gap-4 lg:items-center">
      <Image
        src={topic?.Image_url}
        alt={topic?.Topic}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <h1>{topic.Topic}</h1>
      <p>{topic.Description}</p>
      <p>Lessons:</p>
      <LessonLink lessons={topic.Lessons} id={id} course={topic} />
      <AddToMyCoursesButton courseId={topic.id} incrementCourseQuantity={incrementCourseQuantity}/>
    </div>
  );
}
