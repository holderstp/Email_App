import { Link, Outlet, useHref, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img1 from "../images/connect-logo-black.svg";
const MainLayout = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className=" h-screen flex flex-col fixed z-50 top-0 left-0   ">
      <div className="flex">
        <div className="fixed top-0 right-0 w-5/6 h-14  border-b z-20">
          <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
            <div>
              Path name:
              <span className="font-semibold">/main/email/{params.id}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col justify-end items-end">
                <h6 className="font-bold text-sm">Jonathan Kyle</h6>
                <p className="text-sm text-gray-500 mb-0">test1@test.com</p>
              </div>
              <div>
                <div className="relative h-10 w-10 rounded-full ">
                  <img
                    src="https://i.pravatar.cc/320?img=65&quot"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-red-500 text-white hover:bg-red-400 false "
              >
                <i className="fas fa-power-off"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 flex-shrink-0 bg-sky-950 w-[200px] text-white flex items-center justify-start bg-pink-200">
        <img
          className="max-w-full w-3/4 h-4/6 "
          src="https://fa-react-email-app.vercel.app/static/media/connect-logo-white.c4cdada4.svg"
          alt=""
        ></img>
      </div>

      <div className="flex">
        <div className=" relative min-w-[70px] bg-sky-950 flex flex-col items-center justify-start">
          <header className="h-screen">
            <nav className="navbar navbar-expand navbar-light text-white flex w-full h-14  justify-center font-light text-md">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/main/home">
                    <i className="fas fa-home"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/main/email">
                    <i className="far fa-envelope"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/main/contact">
                    <i className="far fa-user"></i>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
