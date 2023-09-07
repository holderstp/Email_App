import { useEffect, useState } from "react";
import User from "../data/users.json";
import { BrowserRouter, Navigate, Route, useParams } from "react-router-dom";
import MainLayout from "./MainLayout";

const UserLogin = () => {
  const params = useParams();

  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  console.log(User[0].email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const select: any = document.getElementById("email");

    if (select.value === User[0].email && password === User[0].password) {
      localStorage.setItem("token", select.value);
      validate();
    }

    return;

    //do something with form
  };

  const validate = () => {
    window.location.href = "/main/email";
  };

  return (
    <div className="w-full bg-blue-900 min-h-screen ">
      <div className="rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-12 ">
            <div className="w-full text-center flex flex-col items-center gap-3">
              <div className="w-full px-24">
                <img
                  src="src\images\connect-logo-black.svg"
                  alt=""
                  className="max-w-full "
                />
                <div>
                  <p className="text-xl text-gray-700 font-light">
                    Login to check your email!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 ">
          <div className="lg:col-span-12 ">
            <form action="" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-12 gap-4">
                <div className="lg:col-span-12 ">
                  <div className="">
                    <label className="block text-xl mb-2 " htmlFor="email">
                      Email
                    </label>
                    <select
                      className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md false"
                      id="email"
                      name="email"
                    >
                      <option value="">------Choose an email</option>
                      <option value={User[0].email}>test1@test.com</option>
                    </select>
                  </div>
                </div>
                <div className="lg:col-span-12 ">
                  <div className="">
                    <label className="block text-xl mb-2 " htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md  false"
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassWord(e.target.value)}
                    />
                  </div>
                </div>
                <div className="lg:col-span-12 mt-3">
                  <button
                    className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-gray-500 text-white hover:bg-gray-400 false w-full bg-darkblue-800"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
