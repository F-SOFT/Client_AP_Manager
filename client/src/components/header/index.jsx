import React, { useState, memo } from "react";
import { useStore, actions } from "../../context";
import { useHistory, useLocation, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { PATH } from "../../contants/PATH";

const Header = () => {
  const {
    authState: { data },
    dispatchAuth,
  } = useStore();
  let home;
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  if (path === "/home" || path === "/admin" || path === "/") {
    home = true;
  } else {
    home = false;
  }
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatchAuth(actions.authActions.logout_success());
    history.push("/login");
  };

  return (
    <div className="fixed z-50 w-full shadow-sm bg-white">
      <div className="h-16 flex items-center justify-between px-8">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-10 rounded-md" />
          {!home ? (
            <div
              className="flex items-center text-lg text-gray-500 font-bold cursor-pointer"
              onClick={() => history.goBack()}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-left"
                className="svg-inline--fa fa-chevron-left w-2 transform translate-y-0.5 ml-5 mr-1.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                ></path>
              </svg>
              Quay lại
            </div>
          ) : (
            <p className="ml-6 text-md font-bold">AP-Manager Group 3</p>
          )}
        </div>

        <div className="flex items-center border border-gray-300 rounded-full transform -translate-x-18">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="check-isOpen"
            type="text"
            // onBlur={() => setIsOpen(false)}
            className="w-96 px-5 py-1.5 focus:outline-none rounded-r-full bg-transparent text-white"
            placeholder="Tìm kiếm khoá học..."
          />
        </div>

        <div className="flex items-center">
          <>
            {data ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 mr-4 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className="relative">
                  <label onClick={handleOpen}>
                    <img
                      src={`https://ap-sever.herokuapp.com/avatars/${data?.avatar}`}
                      alt="Avatar"
                      className="w-9 rounded-full cursor-pointer"
                    />
                  </label>

                  <div
                    className={`${
                      isOpen ? "show" : "opacity-0 -mt-6 hidden"
                    } absolute z-50 bg-white w-72 right-6 px-5 pt-4 rounded-xl border boder-gray-300 shadow-2xl`}
                  >
                    <div>
                      <div className="flex items-center pb-4">
                        <img
                          src={`https://ap-sever.herokuapp.com/avatars/${data?.avatar}`}
                          alt="Avatar"
                          className="w-16 rounded-full"
                        />
                        <p className="ml-3 text-xl font-bold">
                          {data?.fullName}
                        </p>
                      </div>

                      <p className="py-4 text-lg text-gray-600 font-medium border-t border-gray-300 cursor-pointer hover:text-black">
                        Thông tin cá nhân
                      </p>
                      <p
                        className="py-4 text-lg text-gray-600 font-medium border-t border-gray-300 cursor-pointer hover:text-black"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link to={PATH.LOGIN}>
                <button className="py-2 px-4 bg-blue-400 rounded-xl text-white">
                  Đăng nhập
                </button>
              </Link>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
