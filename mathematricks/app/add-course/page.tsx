export const metadata = {
    title: 'Add Product - Mathematricks'
}

export default function AddCoursePage() {
  return (
    <div>
      <h1>Add Course</h1>
      <form>
        <input
          required
          name="name"
          placeholder="Name"
          className="my-3 w-full input input-bordered"
        />
        <textarea 
        required
        name='description'
        placeholder="Description"
        className='textarea textarea-bordered mb-3 w-full'/>
      </form>
      <button className='btn btn-primary btn-block'type='submit'>Add Course</button>
    </div>
  );
}
