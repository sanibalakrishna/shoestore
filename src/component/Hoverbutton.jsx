import React from "react";

function Hoverbutton({ title, setText, textrec }) {
  const handleText = () => {
    setText(textrec);
  };

  return (
    <div
      class="border-b-4 border-transparent hover:border-purple-800 rounded"
      onClick={handleText}
    >
      <h1 className="hover:text-purple-800 ">{title}</h1>
    </div>
  );
}

export default Hoverbutton;
