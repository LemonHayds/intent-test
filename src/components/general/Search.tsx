import React from "react";

const Search = () => {
  return (
    <form>
      <div className="relative text-sm">
        <input
          type="search"
          id="wealth-search"
          className="block w-full pl-9 text-sm bg-white p-4 outline-offset-1"
          placeholder="Type In A Keyword, Interest Or Topic"
          required
        />
        <button
          type="button"
          className="text-white absolute right-0 bottom-0 h-full w-16 bg-black hover:bg-black/80"
        >
          GO
        </button>
      </div>
    </form>
  );
};

export default Search;
