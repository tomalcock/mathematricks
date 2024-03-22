"use server"
import { redirect } from "next/navigation";

export default async function searchCourses(formData: FormData) {
    'use server'

    const searchQuery = formData.get('searchQuery')?.toString();

    if(searchQuery) {
        redirect(`/search?query=${searchQuery}`)
    }
}