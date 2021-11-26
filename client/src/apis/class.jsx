import axiosClient from "../helpers/axiosClient";
import { PATH_CLASS } from "../contants/PATH";

class Class {
    getClasses() {
        return axiosClient.get(PATH_CLASS.GET_CLASSES);
    }

    getClassCourse(idCourse) {
        return axiosClient.get(`${PATH_CLASS.GET_CLASS_COURSE}/${idCourse}`);
    }

    getClassUser() {
        return axiosClient.get(`${PATH_CLASS.GET_CLASS_USER}`);
    }

    postClass(classData) {
        return axiosClient.post(`${PATH_CLASS.POST_CLASS}`, classData);
    }

    updateClass(idClass, classData) {
        return axiosClient.put(
            `${PATH_CLASS.UPDATE_CLASS}/${idClass}`,
            classData
        );
    }
}

export default new Class();
