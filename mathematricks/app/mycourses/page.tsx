import { getMyCourses } from "@/lib/db/mycourses";
import MyCoursesEntry from "./MycoursesEntry";

export const metadata = {
  title: "My Courses - Mathematricks",
};

export default async function MycoursesPage() {
  const mycourses = await getMyCourses();

  return (
    <div>
      <h1 className="text-3xl mb-6 font-bold">My Courses</h1>
      {mycourses?.courses.map((item) => (
        <MyCoursesEntry mycoursesItem={item} key={item.id} />
      ))}
    </div>
  );
}
