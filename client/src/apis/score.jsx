import axiosClient from "../helpers/axiosClient";
import { PATH_SCORE } from "../contants/PATH";

class Score {
  getScoreClass(classId, userId) {
    const uri = `${PATH_SCORE.GET_SCORE}/${classId}`;
    return axiosClient.get(uri);
  }
}

export default new Score();
