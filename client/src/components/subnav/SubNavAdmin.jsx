import React from "react";
import { PATH } from "../../contants/PATH";
import { Link, useLocation } from "react-router-dom";
import Icon from "../icon";

const SubNavAdmin = () => {
  const location = useLocation();
  let result;
  let twoEleResult;
  if (location.pathname) {
    result = location.pathname.split("/")[1];
    twoEleResult = location.pathname.split("/")[2];
  }
  console.log(twoEleResult);
  return (
    <div className="sub__nav px-1.5 fixed top-1/2 transform -translate-y-1/2 z-20 rounded-r-2xl bg-white shadow-xl">
      <div className="w-20 text-sm text-white font-semibold font-sans flex flex-col items-center">
        <Link
          to={PATH.ADMIN}
          className={`${
            twoEleResult === undefined
              ? "active"
              : "hover:text-black hover:bg-white rounded-lg"
          }
          } flex flex-col items-center justify-center w-16 h-16 mt-4 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </Icon>
          <p className="text-xs">Dasboard</p>
        </Link>

        <Link
          to={PATH.MANAGER_CATEGORY}
          className={`${
            twoEleResult === "category"
              ? "active"
              : "hover:text-black hover:bg-white rounded-lg"
          }
          } flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </Icon>
          <p className="text-xs">Category</p>
        </Link>

        <Link
          to={PATH.MANAGERCOURSE}
          className={`${
            twoEleResult === "course"
              ? "active"
              : "hover:text-black hover:bg-white rounded-lg"
          } ${
            result === "topic" ? "active" : ""
          } flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </Icon>
          <p className="text-xs">Course</p>
        </Link>

        <Link
          to={PATH.MANAGERUSER}
          className={`${
            twoEleResult === "user"
              ? "active"
              : "hover:text-black hover:bg-white rounded-lg"
          }
          flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </Icon>
          <p className="text-xs">User</p>
        </Link>

        <Link
          to={PATH.SCORE}
          className={`${
            result === "score"
              ? "active"
              : "hover:text-black hover:bg-white rounded-lg"
          }
          } flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </Icon>

          <p className="text-xs">Score</p>
        </Link>

        <Link
          to={PATH.HOME}
          className={`
          flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
        >
          <Icon className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </Icon>
          <p className="text-xs">Status</p>
        </Link>
      </div>
    </div>
  );
};

export default SubNavAdmin;
