import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>Sign in to write a post</div>;
  }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 p-6 bg-gray-50'>
      <h1 className="text-lg font-semibold">Create a New Post</h1>
      <form className="flex flex-col gap-6 mb-6 flex-1 bg-white p-6 rounded-xl shadow-lg">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white hover:bg-gray-100 transition">
          Add a cover page
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none border-b-2 border-gray-300 focus:border-blue-500 transition"
          type="text"
          placeholder="My Life Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="cat" className="text-base">Choose a type</label>
          <select name="cat" id="cat" className="p-2 rounded-xl bg-white shadow-md border border-gray-300 focus:border-blue-500 transition">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id="desc"
          className="p-4 rounded-xl bg-white shadow-md border border-gray-300 focus:border-blue-500 transition"
          placeholder="A short description"
        ></textarea>
        <ReactQuill theme="snow" className="flex-1 pb-10 rounded-xl bg-white shadow-md border border-gray-300" />
        <button className="bg-blue-500 text-white font-medium rounded-xl mt-4 p-2 w-36 hover:bg-blue-600 transition">
          Post
        </button>
      </form>
    </div>
  );
};

export default Write;