import { NavLink, Outlet, useParams } from "react-router-dom";
import React from "react";
import Data from "../data/messages.json";

export interface IInboxDetail {
  handleTog: (id: number) => void;
}

const Inbox = ({ handleTog }: IInboxDetail) => {
  const params = useParams();

  // console.log(params);

  const inboxList = Data.filter((item) => item.folder === `${params.name}`);
  // console.log(inboxList);

  const handleToggle = (id: number) => {
    handleTog(id);
  };
  return (
    <div className="flex">
      <div className="w-1/4  border-r border-gray-300  relative overflow-hidden">
        <div className="overflow-scroll relative h-screen">
          {inboxList.map((i, index) => (
            <div
              className="flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer 
            false"
            >
              <button
                onClick={() => {
                  handleToggle(index);
                }}
              >
                <NavLink to={`/main/email/${params.name}/${i.id}`}>
                  <div className="flex">
                    <div className="w-1/6 rounded-full">
                      <img
                        src={i.to.avatarUrl}
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div className="w-full flex flex-col items-start justify-between">
                      <div className="flex items-center justify-between w-full text-sm text-gray-500 font-medium">
                        <p>{i.to.name}</p>
                        <p>{i.timestamp}</p>
                      </div>
                      <div>
                        <h6 className="text-md font-bold w-full line-clamp-1">
                          {i.main.title}
                        </h6>
                        <div className="w-full">
                          <p className="w-full text-sm line-clamp-3 text-gray-500">
                            {i.main.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </button>
            </div>
          ))}
        </div>
      </div>
      <main className="w-2/3 flex flex-col items-center justify-start">
        <Outlet />
      </main>
    </div>
  );
};

export default Inbox;
