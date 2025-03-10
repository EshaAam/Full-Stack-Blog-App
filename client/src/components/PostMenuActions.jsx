const PostMenuActions = () => {
    return (
        <div className=''>
            <h1>Actions</h1>
            <div className="flex items-center gap-2 cursor-pointer text-sm py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px" fill="grey">
                    <path
                        d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                        stroke="black"
                        strokeWidth="2"
                        
                    />

                </svg>
                <span>Save this Post</span>
            </div>
        </div>
    )
}

export default PostMenuActions