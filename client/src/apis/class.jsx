import axiosClient from "../helpers/axiosClient";
import { PATH_CLASS } from "../contants/PATH";

class Class {
  getClasses() {
    return axiosClient.get(PATH_CLASS.GET_CLASSES);
  }

  getClassCourse(idCourse) {
    return axiosClient.get(`${PATH_CLASS.GET_CLASS_COURSE}/${idCourse}`);
  }
}

export default new Class();
