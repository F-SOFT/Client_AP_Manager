import axiosClient from "../helpers/axiosClient";
import { PATH_AUTH } from "../contants/PATH";

class Auth {
    login(userData) {
        return axiosClient.post(PATH_AUTH.LOGIN, userData);
    }
    user() {
        return axiosClient.get(PATH_AUTH.GETUSER);
    }
    users() {
        return axiosClient.get(PATH_AUTH.GET_USERS);
    }
    users_pagination(limit, page) {
        return axiosClient.get(
            `${PATH_AUTH.GET_USERS}?limit=${limit}&page=${page}`
        );
    }
    roles() {
        return axiosClient.get(PATH_AUTH.GET_ROLES);
    }
    findUser(idRole) {
        return axiosClient.get(`${PATH_AUTH.FIND_USER}/${idRole}`);
    }
    postUsers(userData) {
        return axiosClient.post(PATH_AUTH.POST_USER, userData);
    }
    updateUser(userData) {
        return axiosClient.put(
            `${PATH_AUTH.UPDATE_USER}/${userData._id}`,
            userData
        );
    }
    deleteUser(userId) {
        return axiosClient.delete(`${PATH_AUTH.DELETE_USER}/${userId}`);
    }
}

export default new Auth();
