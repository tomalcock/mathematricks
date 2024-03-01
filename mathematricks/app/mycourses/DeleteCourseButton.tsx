"use client"

import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type deleteCourseProps = {
  children: React.ReactNode,
  className?: string,
} & ComponentProps<"button">

export default function DeleteCourseButton({ children, className, ...props }: deleteCourseProps) {

  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn btn-primary ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner loading-sm"></span>}
      {children}
    </button>
  );


}
