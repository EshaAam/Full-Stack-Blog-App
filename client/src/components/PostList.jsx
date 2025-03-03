import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam, limit: 2
    }
  });
  return res.data;
};


const PostList = () => {

  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => fetchPosts(),
  // })
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasmore ? pages.length + 1 : undefined,
  });

  console.log(data);
  
  if (isFetching) return "Loading...";

  if (error) return "An error has occurred ";
  console.log(data);

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  


  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );

  {/* <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button> */}

};

export default PostList