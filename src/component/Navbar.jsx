import React from "react";
import Drawer from "./Drawer";

import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function Navbar({ setDrawer }) {
  return (
    <div className="flex justify-around ">
      <div className="flex">
        <div className=" btn btn-ghost">
          <Drawer setDrawer={setDrawer} />
        </div>
        <h1 className="btn btn-ghost normal-case text-xl">Constructor</h1>
      </div>
      <div>
        <h1 className="btn btn-ghost">Women</h1>
        <h1 className="btn btn-ghost">Men</h1>
        <h1 className="btn btn-ghost">Children</h1>
        <h1 className="btn btn-ghost">Contacts</h1>
      </div>
      <div className="flex">
        <div className="btn btn-ghost flex">
          <FaUser size={20} />
          <h1 className="m-2">Account</h1>
        </div>
        <div className="btn btn-ghost flex">
          <IoMdCart size={23} />
          <h1 className="m-2">Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
