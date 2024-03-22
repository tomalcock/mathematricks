import CourseCard from "@/components/CourseCard";
import { Metadata } from "next";
import prisma from "@/lib/db/prisma";


interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - Mathematricks`,
  };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const courses = await prisma?.course.findMany({
    where: {
      OR: [
        {
          Topic: { contains: query, mode: "insensitive" },
        },
        {
          Description: { contains: query, mode: "insensitive" },
        },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (courses?.length === 0) {
    return <div className="text-center">No Courses Found</div>;
  }

  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {courses?.map((course) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </div>
  );
}
