import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <div className=" grid grid-cols-3 sm:flex justify-between w-full py-5 bg-black text-white">
      <div className="text-xl font-bold">NAF brands</div>
      <div className="grid-cols-1 sm:flex space-x-4">
        <div>help</div>
        <div>plase </div>
        <div>service</div>
        <div>subscribe</div>
      </div>
      <div className="grid-cols-1 sm:flex space-x-4">
        <Input
          type="text"
          placeholder="please subscibe to our email"
          className="w-1/2"
        />
        <Button className="bg-white text-black hover:bg-white hover:text-black">
          subscribe
        </Button>
      </div>
    </div>
  );
}
