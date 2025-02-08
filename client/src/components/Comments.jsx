import Comment from "./Comment"

const Comments = () => {
    return (
        <div className='flex flex-col gap-8 lg:w-3/5'>
            <h1 className="text-xl text-gray-500 underline pt-3">Comments</h1>
            <div className="">
                <textarea className="w-full h-40 p-4 bg-slate-50 rounded-lg" placeholder="Write your comment here"></textarea>
            </div>
            <div className="mt-4">
                <Comment />
                <Comment />
                <Comment />
                <Comment />

            </div>
        </div>
    )
}

export default Comments