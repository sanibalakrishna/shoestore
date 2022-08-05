import React from "react";
import shoeex from "../shoes/shoeex.png";
import { ImSearch } from "react-icons/im";

function Card() {
  return (
    <div className=" relative ml-32">
      <img src={shoeex} alt="sneaker" height={450} width={500}></img>
      <div className="absolute top-48 -left-10 flex flex-col">
        <button className="btn bg-white border-none hover:bg-white active:bg-white text-black rounded-full">
          3d
        </button>
        <button className="btn mt-8 bg-white border-none hover:bg-white active:bg-white text-black rounded-full">
          <ImSearch />
        </button>
      </div>
    </div>
  );
}

export default Card;
