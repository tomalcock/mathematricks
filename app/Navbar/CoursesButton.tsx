'use client'

import { MyMathsCourses } from "@/lib/db/mycourses";
import { MdMenuBook } from "react-icons/md";
import Link from "next/link";

interface CoursesButtonProps {
  mycourses: MyMathsCourses | null;
}

export default function CoursesButton({ mycourses }: CoursesButtonProps) {

    function closeDropdown(){
        const elem = document.activeElement as HTMLElement
        if (elem) {
            elem.blur()
        }
    }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <MdMenuBook />
          <span className="badge badge-sm indicator-item">
            {mycourses?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30"
      >
        <div className="card-body">
          <span className="text-lg font-bold">
            {mycourses?.size || 0}{" "}
            {mycourses?.size === 1 ? "course" : "courses"}
          </span>
          <div className="card-actions">
            <Link
              href="/mycourses"
              className="btn btn-primary btn-block"
              onClick={closeDropdown}
            >
              View My Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
