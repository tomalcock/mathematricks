import CourseCard from "@/components/CourseCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const courses = await prisma.course.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className='hero-content flex-col lg:flex-row'>
          <Image
            src={courses[0].Image_url}
            alt={courses[0].Topic}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{courses[0].Topic}</h1>
            <p className='py-g'>{courses[0].Description}</p>
            <Link 
            href={"/topics/" + courses[0].id}
            className="btn-primary btn">
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {courses.slice(1).map(course => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
