import React, { useState } from "react";
import { useStore } from "../../../context";
import CardTheme from "../../../components/card/CardTheme";
import infomation from "../../../assets/img/infomation.png";
import UserDetail from "./components/UserDetail";

const ProfilePage = () => {
  const {
    authState: { data },
  } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="page bg-white">
      <div className="mx-10">
        <div className="text-gradient w-max">
          <p className="text-2xl font-bold text-white pt-2 pl-14">
            Thông tin cá nhân
          </p>
        </div>

        <div className="absolute bottom-0 grid gap-10 grid-cols-3 mx-4 py-6">
          <CardTheme
            name="Thông tin cá nhân"
            description="Xem chi tiết thông tin cá nhân"
            nameBtn="Chi tiết"
            img={infomation}
            handleClick={handleOpen}
          />
        </div>

        <UserDetail isOpen={isOpen} data={data} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default ProfilePage;
