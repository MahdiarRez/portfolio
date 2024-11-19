import React from "react";

function Loader() {
  return (
    <div className="h-screen w-screen bg-green-500 flex justify-center items-center">
      <div className="bar left"></div>
      <div className="bar top"></div>
      <div className="bar right"></div>
      <div className="bar bottom"></div>
    </div>
  );
}

export default Loader;
