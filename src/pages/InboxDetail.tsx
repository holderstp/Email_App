import { NavLink, useParams } from "react-router-dom";
import React, { useState } from "react";
import Data from "../data/messages.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InboxDetail = ({ currentState }: any) => {
  console.log(currentState);
  const params = useParams();
  const inboxList = Data.filter((item) => item.folder === `${params.name}`);
  console.log(inboxList);
  return (
    <div className="w-3/4 h-full top-14 relative  flex flex-col items-center">
      <div className="grid grid-cols-12 p-6">
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <div className="sm:w-1/3 xl:w-1/4">
              <div className="relative w-full pt-full rounded-full">
                <img
                  src={inboxList[currentState].to.avatarUrl}
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex">
              <h6 className=" text-md font-semibold">
                {inboxList[currentState].to.name}
              </h6>
              <p>{inboxList[currentState].timestamp}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500 font-light ">
                20:05:35 22/6/2020
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-gray-500 text-white hover:bg-gray-400 false "
                >
                  Reply
                </button>
                <button
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-green-500 text-green-500 hover:bg-green-200 false "
                >
                  Forward
                </button>
                <button
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-red-500 text-red-500 hover:bg-red-200 false "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="py-12">
          <h2 className="text-4xl font-semibold mb-8">
            {inboxList[currentState].main.title}
          </h2>
          <div className="border-b pb-8">
            <p> {inboxList[currentState].main.content}</p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
        <div>
          <h6 className="text-xl font-bold w-full line-clamp-1">
            {inboxList[currentState].main.title}
          </h6>
          <p className="w-full text-xl line-clamp-3 text-gray-500">
            {inboxList[currentState].main.content}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default InboxDetail;
