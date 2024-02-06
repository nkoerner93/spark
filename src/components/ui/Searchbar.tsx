import { FC } from "react";
import { Input } from "./shad-cn/input";

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  return (
    <div className="flex flex-row items-center w-full lg:w-1/3">
      <Input
        className="border-slate-300 focus:border-slate-400 focus-visible:ring-transparent"
        type="search"
        placeholder="Search..."
      ></Input>
    </div>
  );
};

export default Searchbar;
