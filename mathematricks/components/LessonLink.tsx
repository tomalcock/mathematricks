import { Course } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";


interface LessonLinkProps {
    course: Course,
    id : string
    lessons : string[]
}

export default function LessonLink({ course, id, lessons }: LessonLinkProps) {
  return (
      <div className='carousel'>
      {lessons.map((element) => { 
        return <div key={element} className='carousel-item py-2 px-2 border-2 rounded-lg border-black mx-5 bg-whites'><Link href={id + `/${element}`}> {element} </Link></div>})}
      </div>
      )
}
 


