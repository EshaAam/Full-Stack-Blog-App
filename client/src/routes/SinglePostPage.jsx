import React from 'react';
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';


const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {

  const { slug } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug)
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const post = data || {}; // if data is null, set post to an empty object
  const user = post.user || { username: "Postman", bio: "" };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* details and paragraph */}
        <div className="flex-1">
          <div className="mb-4">
            <h1 className="text-4xl font-bold">{post.title || "Untitle Post"}</h1>
            <div className="text-gray-500 mt-1 ml-16">
              <span>Written by</span>
              <Link to="" className="text-blue-800 ml-2">{user.username}</Link>
              <span className="text-gray-500 ml-1"> on </span>
              <Link to="" className="text-blue-800 ml-1"> {post.category || "Uncategorized"}</Link>
              <span className="text-gray-500 ml-2">{post.createdAt? format(post.createdAt) : "Unknown Date"} </span>
            </div>
          </div>
          <p className="text-lg text-justify">
            {post.content || "No content available"}
          </p>
          
        </div>
        {/* image */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <Image src="postImg.jpeg" className="rounded-2xl object-cover w-full" />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-8 text-justify'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
        </div>

        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">{user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />

        </div>

      </div>
      <Comments postId={data._id} />

    </div>
  );
}

export default SinglePostPage;