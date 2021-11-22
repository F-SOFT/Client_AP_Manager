import React from "react";
import Pagination from "../../../components/pagination";
import ScheduleItem from "./components/ScheduleItem";

const SchedulePage = () => {
  return (
    <div className="mx-10 relative">
      <div className="mb-6 flex items-center">
        <p className="text-2xl font-bold my-4">Lịch học</p>
        <select
          name=""
          id=""
          className="focus:outline-none mx-6 py-2 px-4 rounded-xl bg-tranparent"
        >
          <option value="" className="special border-0">
            7 ngày tới
          </option>
          <option value="">10 ngày tới</option>
          <option value="">15 ngày tới</option>
          <option value="">20 ngày tới</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="t-head text-xl text-gray-700 font-bold col-span-3 shadow-lg">
          <ul className="flex items-center grid grid-cols-5 gap-4 py-6 px-5 backdrop-filter backdrop-blur-lg rounded-t-xl border border-t-white">
            <li className="">Ngày học</li>
            <li className=""> Giảng đường</li>
            <li className="">Môn học</li>
            <li className="">Giảng viên</li>
            <li className="">Chi tiết môn học</li>
          </ul>
        </div>

        <div className="t-body text-lg text-gray-500 col-span-3">
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default SchedulePage;
