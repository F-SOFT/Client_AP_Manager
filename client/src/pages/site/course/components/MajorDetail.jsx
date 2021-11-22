import React from "react";

const MajorDetail = ({ description, image }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="text-lg text-gray-700 font-semibold">{description}</p>
        </div>

        <div className="hidden h-52 bg-gray-500 overflow-hidden cursor-pointer rounded-xl lg:block">
          <img
            src={`https://ap-sever.herokuapp.com/images/${image}`}
            alt=""
            className="he w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MajorDetail;
