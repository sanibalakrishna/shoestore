import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { GiShoppingBag } from "react-icons/gi";
import Card from "./Card";

function Cart() {
  const [size, setSize] = useState(true);
  const [guide, setGuide] = useState(false);
  const handleSize = () => {
    setSize(true);
    setGuide(false);
  };
  const handleGuide = () => {
    setSize(false);
    setGuide(true);
  };
  return (
    <div className="flex w-full">
      <div className="w-3/5">
        <Card />
      </div>
      <div className="w-2/5 mt-5">
        <h1 className="text-zinc-600 text-4xl font-sans ">
          Nike <span className="text-5xl font-bold font-mono">Lebron</span> 16
          Low
        </h1>
        <div className="flex mt-3">
          <h1 className="btn btn-ghost" onClick={handleSize}>
            Select Size
          </h1>
          <div className="btn btn-ghost" onClick={handleGuide}>
            <h1>Size Guide &nbsp;</h1>
            <HiArrowRight />
          </div>
        </div>
        <div className="mt-3">
          {size && (
            <div className="grid grid-rows-2  grid-flow-col -ml-2 w-2/4">
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
              <h1 className="btn btn-ghost hover:bg-white active:bg-white">
                10
              </h1>
            </div>
          )}
          {guide && (
            <>
              <h1>size guide</h1>
            </>
          )}
        </div>
        <div className="flex mt-4">
          <button className="btn btn-primary rounded-full">
            <GiShoppingBag size={23} />
            <span className="ml-2">ADD TO BAG</span>
          </button>
          <div className="ml-5">
            <p className="text-3xl font-bold font-mono">$150</p>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col  mt-3 w-3/4 text-zinc-600">
          <div className="btn btn-ghost">
            <h1>Description &nbsp;</h1>
            <HiArrowRight />
          </div>
          <div className="btn btn-ghost">
            <h1>Size & Fit &nbsp;</h1>
            <HiArrowRight />
          </div>
          <div className="btn btn-ghost">
            <h1>Free Shipping & Returns &nbsp;</h1>
            <HiArrowRight />
          </div>
          <div className="btn btn-ghost">
            <h1>Reviews&nbsp;</h1>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
