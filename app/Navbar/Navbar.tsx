import { redirect } from "next/navigation";
import Link from "next/link";
import { BiMath } from "react-icons/bi";
import { getMyCourses } from "@/lib/db/mycourses";
import CoursesButton from "./CoursesButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function searchCourses(formData: FormData) {
    'use server'

    const searchQuery = formData.get('searchQuery')?.toString();

    if(searchQuery) {
        redirect(`/search?query=${searchQuery}`)
    }
}

export default async function Navbar() {

    const session = await getServerSession(authOptions);

    const mycourses = await getMyCourses();

    return (
        <div className='bg-base-100'>
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className='flex-1'>
                    <Link href='/'
                    className='btn btn-ghost text-xl normal-case'>
                    <BiMath size={40}/>
                    Mathematricks
                    </Link>
                </div>
                <div className='flex-none gap-2'>
                    <form action={searchCourses}>
                        <div className='form-control'>
                            <input name='searchQuery'
                            placeholder='Search'
                            className='input input-bordered w-full min-w-[100px]' />
                        </div>
                    </form>
                    <CoursesButton mycourses={mycourses}/>
                    <UserMenuButton session={session} />
                </div>
            </div>
        </div>
    )
}