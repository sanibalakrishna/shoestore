import React, { useState } from "react";
import shoefour from "../shoes/shoefour.png";
import shoeone from "../shoes/shoeone.png";
import shoetwo from "../shoes/shoetwo.png";
import shoethree from "../shoes/shoethree.png";
import { ImSearch } from "react-icons/im";

function Card({ drawer }) {
  const sneakers = [shoeone, shoetwo, shoethree, shoefour];
  const [shoe, setShoe] = useState(shoeone);

  return (
    <div className=" relative ml-32">
      <div className="ml-20">
        <img src={shoe} alt="sneaker" height={450} width={500}></img>
      </div>

      <div className="absolute top-20 -left-10 flex flex-col">
        <button className="btn bg-white border-none hover:bg-white active:bg-white text-black rounded-full">
          3d
        </button>
        <button className="btn mt-8 bg-white border-none hover:bg-white active:bg-white text-black rounded-full">
          <ImSearch />
        </button>
      </div>
      {drawer && (
        <div className="absolute top-2 -left-28 flex flex-col bg-white rounded-lg w-48 ">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Account</button>
          <button className="btn btn-ghost">Cart</button>
        </div>
      )}
      <div className="flex">
        {sneakers.map((item) => (
          <div
            className=" btn h-20 bg-white  border-white hover:border-purple-800 hover:bg-white active:border-purple-800  rounded-lg ml-2 "
            onClick={() => {
              setShoe(item);
            }}
          >
            <img src={item} alt="sneakers" height={120} width={125} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
