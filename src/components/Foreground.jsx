import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9mbs",
      close: true,
      tag: {isOpen : true, tagTitle:"Download Now", tagColor:"green"},
    },
    {
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9mbs",
      close: true,
      tag: {isOpen : true, tagTitle:"Upload Now", tagColor:"blue"},
    },
    {
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9mbs",
      close: true,
      tag: {isOpen : false, tagTitle:"Download Now", tagColor:"blue"},
    },
  ];
  return (
    <>
      <div className="flex gap-10 flex-wrap fixed z-[3] top-0 left-0 w-full h-screen p-5">
        {data.map((item,index)=>(
          <Card data={item}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
