import { Fragment, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { NavLink, Routes, useParams } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UserLogin from "./pages/login";
import MainLayout from "./pages/MainLayout";
import HomeList from "./pages/HomeList";
import EmailList from "./pages/EmailList";
import UserList from "./pages/UserList";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Reminder from "./pages/Reminder";
import Spam from "./pages/Spam";
import Favorite from "./pages/Favorite";
import Junks from "./pages/Junks";
import Draft from "./pages/Drafts";
import InboxDetail from "./pages/InboxDetail";
import Data from "../src/data/messages.json";
import UnderConstruction from "./pages/underConstruction";
enum LOGIN_STATE {
  LOGGEDIN,
  NOT_LOGGEDIN,
}

function App() {
  const [currentState, setCurrentState] = useState(0);
  const handleTog = (index: number) => {
    setCurrentState(index);
  };

  const token = localStorage.getItem("token");
  const currentURL = window.location.href; // returns the absolute URL of a page
  // console.log(currentURL);

  const pathname = window.location.pathname; //returns the current url minus the domain name
  console.log(pathname);
  if (pathname === "/") {
    window.location.href = "/login";
  }

  return (
    <div className="w-full h-screen flex flex-col ">
      {/* <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://fa-react-email-app.vercel.app/static/media/under-construction.ad9fbf48.png"
          alt="Under construction"
        ></img>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/:login" element={<UserLogin />}></Route>
          <Route path="/main" element={<MainLayout />}>
            <Route path="/main/:home" element={<HomeList />}>
              <Route path="/main/:home" element={<UnderConstruction />}></Route>
            </Route>

            <Route path="/main/email" element={<EmailList />}>
              <Route
                path="/main/email/:name"
                element={<Inbox handleTog={handleTog} />}
              >
                <Route
                  path={`/main/email/:name/:id`}
                  element={<InboxDetail currentState={currentState} />}
                ></Route>
              </Route>
            </Route>
            <Route path="/main/:contact" element={<UserList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
