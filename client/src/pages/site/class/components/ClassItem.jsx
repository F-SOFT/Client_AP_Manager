import React from "react";
import { Link } from "react-router-dom";

const ClassItem = ({ name, teacher }) => {
  return (
    <div>
      <Link>
        <div className="flex items-center justify-between py-2 px-5 bg-white rounded-xl w-full">
          <p className="text-lg font-bold">{name}</p>

          <p className="text-sm font-semibold">{teacher}</p>
        </div>
      </Link>
    </div>
  );
};

export default ClassItem;
