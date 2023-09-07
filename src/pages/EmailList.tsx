import { NavLink, Outlet } from "react-router-dom";

const EmailList = () => {
  return (
    <div className="flex ">
      <header className=" min-w-[130px] bg-sky-950 ">
        <nav className="navbar navbar-expand navbar-light bg-light h-screen text-white flex w-full h-14  justify-start pl-12 font-light text-md">
          <ul className="navbar-nav">
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/inbox">Inbox</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/sent">Sent</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/reminder">Reminder</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/spam">Spam</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/favorite ">Favorite</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/junks">Junks</NavLink>
            </li>
            <li className="nav-item text-white flex w-full h-14 items-center justify-start  font-light text-md">
              <NavLink to="/main/email/draft">Draft</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default EmailList;
