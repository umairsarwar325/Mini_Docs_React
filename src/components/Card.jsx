import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Card({ data }) {
  console.log("isOpen: ", data.tag.isOpen);
  return (
    <>
      <div className="relative flex-shrink-0 overflow-hidden w-60 h-72 rounded-[40px] py-10 px-8 bg-zinc-900 opacity-80 text-white">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.dec}</p>
        <div className="footer absolute bottom-0 left-0 w-full ">
          <div className="flex justify-between items-center mb-3 py-3 px-8">
            <h5 className="font-semibold">{data.fileSize}</h5>
            <span className="flex justify-center items-center w-8 h-6 bg-zinc-600 rounded-full">
              {data.close ? (
                <FaRegFileAlt size=".9em" color="#ffff" />
              ) : (
                <MdOutlineFileDownload size=".9em" color="#ffff" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div className={`tag flex justify-center items-center w-full py-4 ${data.tag.tagColor==="green" ? "bg-green-600":"bg-blue-600"}`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
