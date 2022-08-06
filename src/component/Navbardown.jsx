import React, { useState } from "react";
import Hoverbutton from "./Hoverbutton";
import Details from "./Details";

function Navbardown() {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="flex justify-around mt-2">
        <Hoverbutton
          title="Description"
          setText={setText}
          textrec="this is description"
        />
        <Hoverbutton
          title="Size&Fit"
          setText={setText}
          textrec="this is Size & fit"
        />
        <Hoverbutton
          title="Free Shipping & Returns"
          setText={setText}
          textrec="Free Shipping & Returns"
        />
        <Hoverbutton title="Reviews" setText={setText} textrec="Reviews" />
        <Hoverbutton
          title="Learn About Discounts and Promotions"
          setText={setText}
          textrec="Learn About Discounts and Promotions"
        />
      </div>
      <div>
        <Details text={text} />
      </div>
    </div>
  );
}

export default Navbardown;
