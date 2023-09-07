"use client";

import React from "react";
import { Input } from "../ui/input";
import { BiSearchAlt2 } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface Props {
  routeType: String;
}

const SearchBar = ({ routeType }: Props) => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  // query after 0.3s of no input
  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="searchbar">
      <BiSearchAlt2 color="white" size={"25px"} />

      <Input
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${routeType !== "/search" ? "Search communities" : "Search creators"}`}
        className="no-focus searchbar_input"
      />
    </div>
  );
};

export default SearchBar;
