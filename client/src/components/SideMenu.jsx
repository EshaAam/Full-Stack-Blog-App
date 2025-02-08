import Search from "./Search"

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb-4 mt-8 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer" >
          <input
            type="radio"
            name="sort"
            value="newest"
            // onChange={handleFilterChange} 
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800" />
          Newsest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            // onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            // onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            // onChange={handleFilterChange}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>

        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
          <span className="underline cursor-pointer">All</span>
          <span className="underline cursor-pointer">Web Design</span>
          <span className="underline cursor-pointer">Development</span>
          <span className="underline cursor-pointer">Databases</span>
          <span className="underline cursor-pointer">Search Engines</span>
          <span className="underline cursor-pointer">Marketing</span>
        </div>


      </div>


    </div>
  )
}

export default SideMenu