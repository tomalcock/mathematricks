"use client";

import { mycoursesItemWithCourse } from "@/lib/db/mycourses";
import Image from "next/image";
import Link from "next/link";

interface mycoursesItemProps {
  mycoursesItem: mycoursesItemWithCourse;
}

export default function MyCoursesEntry({
  mycoursesItem: { course },
}: mycoursesItemProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={course.Image_url}
          alt={course.Topic}
          height={200}
          width={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/courses/" + course.id} className="font-bold">
            {course.Topic}
          </Link>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
