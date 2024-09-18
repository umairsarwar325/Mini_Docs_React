import React from "react";

function Background() {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
      <div className="w-full absolute top-[5%] py-5 flex justify-center text-zinc-400 font-bold text-xl">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] font-semibold leading-none tracking-tighter text-zinc-950">
        DOCS.
      </h1>
    </div>
    </>
  );
}

export default Background;
