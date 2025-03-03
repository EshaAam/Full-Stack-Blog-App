import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {

  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      navigate(`/${res.data.slug}`); // Redirect to the newly created post
    }
  });



  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>Sign in to write a post</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Remove all <p> and </p> tags from the content
    const cleanedContent = value.replace(/<\/?p>/g, '');
    const data = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      category: formData.get("category"),
      content: cleanedContent,
    };
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 p-6 bg-gray-50'>
      <h1 className="text-lg text-sky-700 font-semibold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-6 flex-1 bg-white p-6 rounded-xl shadow-lg">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white hover:bg-gray-100 transition">
          Add a cover page
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none border-b-2 border-gray-300 focus:border-blue-500 transition"
          type="text"
          placeholder="My Life Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-base">Choose a type</label>
          <select name="category" id="" className="p-2 rounded-xl bg-white shadow-md border border-gray-300 focus:border-blue-500 transition">
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
          id=""
          className="p-4 rounded-xl bg-white shadow-md border border-gray-300 focus:border-blue-500 transition"
          placeholder="A short description"
        ></textarea>

        <ReactQuill
          theme="snow"
          className="flex-1 pb-10 rounded-xl bg-white shadow-md border border-gray-300"
          value={value}
          onChange={setValue}
        />
        <button
          disabled={mutation.isPending}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 hover:bg-blue-600 transition disabled:bg-blue-400 disabled:cursor-not-allowed">
          {mutation.isPending ? "Loading..." : "Post"}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default Write;