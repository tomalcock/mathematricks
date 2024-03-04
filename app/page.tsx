import CourseCard from "@/components/CourseCard";
import PaginationBar from "@/components/PaginationBar";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const heroItemCount = 1;
  const totalItemCount = await prisma.course.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const courses = await prisma.course.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
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
              <p className="py-g">{courses[0].Description}</p>
              <Link
                href={"/topics/" + courses[0].id}
                className="btn-primary btn"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="my-4 gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {(currentPage === 1 ? courses.slice(1) : courses).map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
      {/* <div>{currentPage}</div> */}
    </div>
    
  );
}
