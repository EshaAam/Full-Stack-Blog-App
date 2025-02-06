import { Link } from "react-router-dom"
import Image from "./Image"
const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3 p-1" w="720">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <div className="text-blue-800">
                    <span className="flex items-center gap-2 text-gray-400 text-sm">Written by</span>
                    <Link to="" className="text-blue-800"> John Doe</Link>
                    <span className="text-gray-500"> on</span>
                    <Link to="" className="text-blue-800"> Web Design</Link>
                    <span className="text-gray-500"> 2 days ago</span>
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur saepe, eum facere deserunt incidunt explicabo sed, ipsam illo itaque asperiores quod quibusdam. Eius labore ut tempora aliquid et quidem!
                </p>
            </div>
        </div>
    )
}

export default PostListItem