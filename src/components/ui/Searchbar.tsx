import { FC } from "react";
import { Input } from "./shad-cn/input";

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  return (
    <div className="hidden w-full flex-row items-center md:w-3/5 lg:w-1/2">
      <Input
        className="border-slate-300 focus:border-slate-400 focus-visible:ring-transparent"
        type="search"
        placeholder="Search..."
      ></Input>
    </div>
  );
};

export default Searchbar;
