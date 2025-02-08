import Image from "./Image"
const Comment = () => {
    return (
        <div className='p-4 bg-slate-50 rounded-lg mb-8'>
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
                <span>John Doe</span>
                <span className="p-4 text-gray-500">2 days ago</span>

            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor sit amet     consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero commodi laborum.
                </p>
            </div>

        </div>
    )
}

export default Comment 