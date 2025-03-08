import { Link } from "react-router-dom"
import Image from "./Image"
import {format} from "timeago.js";


const PostListItem = ({post}) => {
    return (
        <div className='flex flex-col xl:flex-row gap-8 mb-8'>
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3 p-1" w="720">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`/${post.slug}`} className="text-3xl font-semibold">
                    {post.title}
                </Link>
                <div className="text-blue-800">
                    <span className="flex items-center gap-2 text-gray-400 text-sm">Written by</span>
                    <Link to="" className="text-blue-800">{post.user ? post.user.username : "Postman"}</Link>
                    <span className="text-gray-500"> on</span>
                    <Link to="" className="text-blue-800 ml-2">{post.category}</Link>
                    <span className="text-gray-500 ml-2"> {format(post.createdAt)} </span>
                </div>
                <p>
                    {post.desc}
                </p>
                <Link to={`/${post.slug}`} className="text-blue-800">Read more</Link>
            </div>
        </div>
    )
}

export default PostListItem