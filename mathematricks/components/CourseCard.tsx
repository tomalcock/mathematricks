import { Course } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={"/topics/" + course.id}
      className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
    >
      <figure>
        <Image 
        src={course.Image_url}
        alt={course.Topic}
        width={800}
        height={400}
        className='h-48 object-cover'
        />
      </figure>
      <div className="card-body">
      <h2 className='card-title'>{course.Topic}</h2>
      <p className='py-6'>{course.Description}</p>
      </div>
    </Link>
  );
}
