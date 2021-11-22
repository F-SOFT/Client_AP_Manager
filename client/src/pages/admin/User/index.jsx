import React, { useState, useEffect, useCallback } from "react";

import { useStore, actions, actionsAlert } from "../../../context";
import Auth from "../../../apis/auth";
import Plus from "../../../components/plus";
import PlusItem from "../../../components/plus/components/PlusItem";
import Modal from "./components/Modal";
import UserItem from "./components/UserItem";
import UserDetail from "../../site/profile/components/UserDetail";
import UpdateUser from "./components/UpdateUuser";
import ModalConfim from "../../../components/modal/ModalConfirm";
import Alert from "../../../components/alert";
import Pagination from "../../../components/pagination";

const ManagerUser = () => {
  const {
    authState: { isLoading, users_pagination, roles, userFind },
    dispatchAuth,
    dispatchAlert,
    majorState: { majors },
  } = useStore();
  console.log(users_pagination);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isRefesh, setIsRefesh] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenDelete, setIsDelete] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [pagination, setPagination] = useState({
    _page: 1,
    _totalRow: 2,
    _limit: 6,
  });
  const [filter, setFilter] = useState({
    _limit: 6,
    _page: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        try {
          const response = await Auth.roles();

          if (response) {
            dispatchAuth(actions.authActions.get_roles(response));
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [dispatchAuth, isLoading]);

  useEffect(() => {
    setIsLoad(true);
    const fetchData = async () => {
      try {
        const response = await Auth.users_pagination(
          filter._limit,
          filter._page
        );

        const { pagination, user } = response;
        setPagination(pagination);
        setIsLoad(false);
        dispatchAuth(actions.authActions.get_users_pagination(user));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filter, dispatchAuth, isRefesh]);

  const handlePageChange = (newPage) => {
    setFilter({ ...filter, _page: newPage });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenUpdate = useCallback(
    (userCode) => {
      console.log(userCode);
      const user = users_pagination.find((user) => user.userCode === userCode);

      dispatchAuth(actions.authActions.find_user(user));
      setIsOpenUpdate(true);
    },
    [dispatchAuth, users_pagination]
  );

  const handleOpenDelete = useCallback(
    (id) => {
      const user = users_pagination.find((user) => user._id === id);

      dispatchAuth(actions.authActions.find_user(user));
      setIsDelete(true);
    },
    [dispatchAuth, users_pagination]
  );

  const handleCloseCreate = () => {
    setIsOpen(false);
    setIsOpenUpdate(false);
    setIsDelete(false);
  };

  const handleCloseDetail = useCallback(() => {
    setIsOpenDetail(false);
  }, []);

  const handleFindUser = useCallback(
    (id) => {
      const user = users_pagination.find((user) => user.userCode === id);

      setData(user);
      setIsOpenDetail(true);
    },
    [users_pagination]
  );

  const handleDeleteUser = async () => {
    handleCloseCreate();
    try {
      const response = await Auth.deleteUser(userFind?._id);

      if (response) {
        setIsRefesh(!isRefesh);
        // dispatchAuth(actions.authActions.delete_user(response.user));
        dispatchAlert(
          actionsAlert.alertActions.display({
            variant: "success",
            text: "Xoá thành công",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page bg-white">
      <div className="mx-10">
        <div className="flex justify-between">
          <div className="text-gradient">
            <p className="text-2xl font-bold text-white pt-2 pl-14">
              Manager User
            </p>
          </div>
          <div className="mt-6">
            <Plus>
              <PlusItem
                handleOpen={handleOpen}
                name="Tạo mới người dùng"
                path="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </Plus>
          </div>
        </div>

        <div className="mt-14">
          <div className="t-head text-md text-white font-bold col-span-3 shadow-lg">
            <ul className="flex items-center grid grid-cols-7 gap-4 p-3 rounded-t-xl bg-gray-500">
              <li className="col-span-5">Email</li>
              <li className="">Chi tiết</li>
              <li className="flex items-center justify-between">
                <p>Cập nhật</p>
                <p>Xoá</p>
              </li>
            </ul>
          </div>

          {isLoad ? (
            <div className="loader">
              <div className="spinner"></div>
            </div>
          ) : (
            users_pagination.map((user) => (
              <div key={user._id}>
                <UserItem
                  user={user}
                  onFindUser={handleFindUser}
                  onOpenUpdate={handleOpenUpdate}
                  onOpenDelete={handleOpenDelete}
                />
              </div>
            ))
          )}
        </div>

        <div>
          <Modal
            isOpen={isOpen}
            handleClose={handleCloseCreate}
            roles={roles}
            majors={majors}
          />

          <UpdateUser
            isOpen={isOpenUpdate}
            handleClose={handleCloseCreate}
            roles={roles}
            majors={majors}
          />

          <ModalConfim
            isOpen={isOpenDelete}
            onClose={handleCloseCreate}
            onDelete={handleDeleteUser}
          />

          <Alert />
        </div>

        <div>
          {data ? (
            <UserDetail
              data={data}
              isOpen={isOpenDetail}
              handleClose={handleCloseDetail}
            />
          ) : (
            ""
          )}
        </div>
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ManagerUser;