'use client'
import { useState } from "react";
import { addCourse } from "./actions";
import FormSubmitButton from "@/components/FormSubmitButton";


export default function AddCoursePage() {
  
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div>
      <h1>Add Course</h1>
      <form action={addCourse}>
        <input
          required
          name="topic"
          placeholder="Topic"
          className="my-3 w-full input input-bordered"
        />
        <textarea 
        required
        name='description'
        placeholder="Description"
        className='textarea textarea-bordered mb-3 w-full'
        />
        <input
          required
          name="image-url"
          placeholder="Image URL"
          type='url'
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-1"
          placeholder="Lesson 1"
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-2"
          placeholder="Lesson 2"
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-3"
          placeholder="Lesson 3"
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-4"
          placeholder="Lesson 4"
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-5"
          placeholder="Lesson 5"
          className="my-3 w-full input input-bordered"
        />
        <input
          required
          name="lesson-6"
          placeholder="Lesson 6"
          className="my-3 w-full input input-bordered"
        />

        <FormSubmitButton className='btn-block'
        onClick={() => setIsComplete(true)}
        >Add Course</FormSubmitButton>
        
      </form>
      <p>{isComplete ? 'Form Submitted' : null}</p>
    </div>
  );
}
