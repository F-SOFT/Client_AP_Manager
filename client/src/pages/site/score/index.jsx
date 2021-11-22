import React, { useState, useEffect, useCallback } from "react";

import {
  useStore,
  actionsCourse,
  actionsClass,
  actionsScore,
} from "../../../context";
import Score from "../../../apis/score";
import Course from "../../../apis/course";
import Class from "../../../apis/class";
import According from "../../../components/according";
import ScoreItem from "./components/ScoreItem";

const ScorePage = () => {
  const [major, setMajor] = useState(null);
  const [classSelect, setClassSelect] = useState(null);
  const [courseId, setCourseId] = useState("617fa086be2cfc5cdf47b236");
  const [load, setLoad] = useState(true);
  const {
    majorState: { majors },
    authState: { data },
    dispatchCourse,
    courseState: { isLoading, courseMajor },
    dispatchClass,
    dispatchScore,
    scoreState: { score_class },
    classState: { classesCourse },
  } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Score.getScoreClass(classSelect);

        if (response) {
          dispatchScore(actionsScore.scoreActions.get_score_class(response));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [classSelect, dispatchScore]);

  useEffect(() => {
    setMajor(majors.find((major) => major.name === data.majorsId.name));
  }, [data.majorsId.name, majors]);

  useEffect(() => {
    const fetchData = async () => {
      if (major?._id) {
        try {
          const response = await Course.getCoursesMajor(major._id);

          if (response) {
            dispatchCourse(
              actionsCourse.courseActions.get_courses_major(response)
            );
            setLoad(false);
          }
        } catch (error) {
          console.log("looix khoa hocj");
        }
      }
    };

    if (isLoading || courseMajor[0]?.majorsId !== major?._id) {
      fetchData();
    } else {
      setLoad(false);
    }
  }, [dispatchCourse, isLoading, major?._id, courseMajor]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Class.getClassCourse(courseId);

        if (response) {
          dispatchClass(actionsClass.classActions.get_class_course(response));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatchClass, courseId]);

  const handleSelectClass = useCallback((classCode) => {
    setClassSelect(classCode);
  }, []);

  return (
    <div className="page bg-white">
      <div className="mx-10">
        <div className="text-gradient w-max">
          <p className="text-2xl text-white font-bold pt-2 pl-14">Xem điểm</p>
        </div>

        {load ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-2 mt-14">
            <div>
              <p className="text-lg font-semibold pb-4 flex items-center">
                Chuyên nghành đang học
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-500">{data.majorsId.name}</p>
              </p>

              <div className="overflow-scroll">
                {courseMajor.map((course, i) => (
                  <div key={course._id} onClick={() => setCourseId(course._id)}>
                    <According
                      id={course._id}
                      nameContent={course.name}
                      desc={i + 1}
                      dataItem={classesCourse}
                      onSelectClass={handleSelectClass}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-full w-full mt-10 flex items-center justify-center shadow-lg bg-white">
              {score_class.length > 0 ? (
                <ScoreItem
                  dotTime={score_class[0].dotTime}
                  score={score_class[0].point}
                  course={score_class[0].courseId.name}
                  comment={score_class[0].comment}
                />
              ) : (
                <p className="text-md font-bold animate-bounce">
                  Vui long chon khoa hoc muon xem
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScorePage;
