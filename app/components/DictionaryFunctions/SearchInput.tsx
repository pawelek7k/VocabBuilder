import { IoIosSearch } from "react-icons/io";

export const SearchInput = () => {
  return (
    <div className="relative w-full max-w-52">
      <input
        type="text"
        placeholder="Find the word"
        className="w-full pr-10 pl-4 py-1 rounded-md border border-gray-300 focus:outline-none text-zinc-950"
      />
      <IoIosSearch className="absolute text-zinc-950 top-1/2 right-3 transform -translate-y-1/2" />
    </div>
  );
};
