"use client";

import { useState, useTransition } from "react";
import { MdMenuBook } from "react-icons/md";

interface AddToMyCoursesButtonProps {
  courseId: string;
  incrementCourseQuantity: (courseId: string) => Promise<void>|boolean;
}

export default function AddToMyCoursesButton({
  courseId,
  incrementCourseQuantity,
}: AddToMyCoursesButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [repeat, setRepeat] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            const addCourse = await incrementCourseQuantity(courseId);
            if(addCourse === false) {
              setSuccess(false);
              setRepeat(true)
            } else {
            setSuccess(true)
            }
          });
        }}
      >
        Add to My Courses
        <MdMenuBook />
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to My Courses</span>
      )}
      {repeat && (
        <span className="text-error">Already added!</span>
      )}
    </div>
  );
}
