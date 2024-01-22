'use client'

import { MdMenuBook } from "react-icons/md"

interface AddToMyCoursesButtonProps {
    courseId: string
}

export default function AddToMyCoursesButton({courseId}: AddToMyCoursesButtonProps) {
    return (
        <div className='flex items-center gap-2'>
            <button 
                className='btn btn-primary'
                onClick={() => {}}
                >
                    Add to My Courses
                    <MdMenuBook />
            </button>
        </div>
    )
}