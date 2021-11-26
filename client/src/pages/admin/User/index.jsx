import React, { useState, useEffect, useCallback } from "react";

import { useStore, actions, actionsAlert } from "../../../context";
import Auth from "../../../apis/auth";
import Score from "../../../apis/score";
import Plus from "../../../components/plus";
import PlusItem from "../../../components/plus/components/PlusItem";
import Modal from "./components/Modal";
import UserItem from "./components/UserItem";
import UserDetail from "../../site/profile/components/UserDetail";
import ScoreDetail from "./components/DetailScore";
import UpdateUser from "./components/UpdateUuser";
import ModalConfim from "../../../components/modal/ModalConfirm";
import Alert from "../../../components/alert";
import Pagination from "../../../components/pagination";

const ManagerUser = () => {
    const {
        authState: { isLoading, roles, userFind },
        dispatchAuth,
        dispatchAlert,
        majorState: { majors },
    } = useStore();

    const [userData, setUserData] = useState({
        isLoading: true,
        user_pagination: [],
    });
    const [scoreDetail, setScoreDetail] = useState({
        isLoading: true,
        scoreUsers: [],
    });
    const [isOpenDetailScore, setOpenDetailScore] = useState({
        isOpen: false,
        selectUser: "",
    });
    console.log(isOpenDetailScore.selectUser);
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
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
        const fetchData = async () => {
            setScoreDetail((prve) => {
                return {
                    ...prve,
                    isLoading: true,
                };
            });
            try {
                const response = await Score.getScoreUser(
                    isOpenDetailScore.selectUser
                );

                if (response) {
                    setScoreDetail({
                        isLoading: false,
                        scoreUsers: response,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (isOpenDetailScore.selectUser) {
            fetchData();
        }
    }, [isOpenDetailScore.selectUser]);

    useEffect(() => {
        const fetchData = async () => {
            setUserData({ isLoading: true });
            try {
                const response = await Auth.users_pagination(
                    filter._limit,
                    filter._page
                );

                const { pagination, user } = response;
                setPagination(pagination);
                setUserData({ isLoading: false, user_pagination: user });
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
            const user = userData.user_pagination.find(
                (user) => user.userCode === userCode
            );

            dispatchAuth(actions.authActions.find_user(user));
            setIsOpenUpdate(true);
        },
        [dispatchAuth, userData.user_pagination]
    );

    const handleOpenDelete = useCallback(
        (id) => {
            const user = userData.user_pagination.find(
                (user) => user._id === id
            );

            dispatchAuth(actions.authActions.find_user(user));
            setIsDelete(true);
        },
        [dispatchAuth, userData.user_pagination]
    );

    const handleCloseCreate = useCallback(() => {
        setIsOpen(false);
        setIsOpenUpdate(false);
        setIsDelete(false);
        setOpenDetailScore({ isOpen: false, selectUser: "" });
    }, []);

    const handleCloseDetail = useCallback(() => {
        setIsOpenDetail(false);
    }, []);

    const handleFindUser = useCallback(
        (id) => {
            const user = userData.user_pagination.find(
                (user) => user.userCode === id
            );

            setData(user);
            setIsOpenDetail(true);
        },
        [userData.user_pagination]
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

    const handleOpenDetailScore = useCallback((userId) => {
        setOpenDetailScore({ isOpen: true, selectUser: userId });
    }, []);

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
                            <li className="">Điểm</li>
                            <li className="flex items-center justify-between">
                                <p>Cập nhật</p>
                                <p>Xoá</p>
                            </li>
                        </ul>
                    </div>

                    {userData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        userData.user_pagination.map((user) => (
                            <div key={user._id}>
                                <UserItem
                                    user={user}
                                    onFindUser={handleFindUser}
                                    onOpenUpdate={handleOpenUpdate}
                                    onOpenDetailScore={handleOpenDetailScore}
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

                    <ScoreDetail
                        isOpen={isOpenDetailScore.isOpen}
                        onClose={handleCloseCreate}
                        listScore={scoreDetail}
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
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ManagerUser;
