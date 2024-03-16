import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-zinc-950 text-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        Photos App
        <div className="ml-auto flex  items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
