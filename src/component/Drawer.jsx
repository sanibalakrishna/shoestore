import React from "react";
import { GrMenu } from "react-icons/gr";

function Drawer({ setDrawer }) {
  const handleDrawer = () => {
    setDrawer((prestate) => !prestate);
  };
  return (
    <div>
      <GrMenu size={23} onClick={handleDrawer} />
    </div>
  );
}

export default Drawer;
