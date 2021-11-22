import React from "react";
import { ICON } from "../../contants/Icon";

const Input = ({ name, placeholder, value, isIcon, css, handleChange }) => {
  let icon;

  if (isIcon === "userIcon") {
    icon = ICON.userIcon;
  } else if (isIcon === "passwordIcon") {
    icon = ICON.passwordIcon;
  } else if (isIcon === "emailIcon") {
    icon = ICON.emailIcon;
  } else if (isIcon === "courseIcon") {
    icon = ICON.courseIcon;
  } else if (isIcon === "phoneIcon") {
    icon = ICON.phoneIcon;
  } else if (isIcon === "bookIcon") {
    icon = ICON.bookIcon;
  } else if (isIcon === "addressIcon") {
    icon = ICON.addressIcon;
  }

  return (
    <div
      className={`flex items-center border border-gray-400 w-1/2 mx-auto my-6 rounded-xl ${css}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600 mx-2 rounded-l-xl"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>

      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="w-full py-2 px-4 focus:outline-none rounded-r-xl"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
