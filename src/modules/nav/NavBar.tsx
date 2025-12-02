import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full p-5 flex justify-between shadow fixed z-50 bg-white">
      <h1 className="text-2xl font-extrabold capitalize font-[Lora] tracking-widest">
        Winnie's Books plug
      </h1>
      <Link to={`/search`}>
        <Button>
          <Search />
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
