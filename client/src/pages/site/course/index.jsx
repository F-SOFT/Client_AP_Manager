import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MajorDetail from "./components/MajorDetail";
import CourseItem from "./components/CourseItems";
import { useStore, actionsCourse } from "../../../context";
import Course from "../../../apis/course";

const CoursePage = () => {
  const [major, setMajor] = useState();
  const [load, setLoad] = useState(true);
  const { course } = useParams();
  const {
    majorState: { majors },
    dispatchCourse,
    courseState: { courseMajor },
  } = useStore();

  useEffect(() => {
    setMajor(majors.find((major) => major.slug === course));
  }, [course, majors]);

  useEffect(() => {
    const fetchData = async () => {
      if (major?._id) {
        try {
          const response = await Course.getCoursesMajor(major._id);
          console.log(response);
          if (response) {
            dispatchCourse(
              actionsCourse.courseActions.get_courses_major(response)
            );
            setLoad(false);
          }
        } catch (error) {
          console.log("Error course");
          // <Redirect to="/notfound" />;
        }
      }
    };
    if (courseMajor && courseMajor[0]?.majorsId !== major?._id) {
      fetchData();
    } else {
      setLoad(false);
    }
  }, [major?._id, dispatchCourse, courseMajor]);

  return (
    <div className="page bg-white">
      <div className="mx-10">
        <div className="text-gradient w-max">
          <p className="text-2xl text-white font-bold pt-2 pl-14">
            {major?.name}
          </p>
        </div>
        {load ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="mt-14">
            <div className="">
              <MajorDetail
                description={major?.description}
                image={major?.image}
              />
            </div>
            <div className="relative">
              <p className="text-2xl font-bold my-8">Study route</p>

              <div className="grid grid-cols-4">
                {courseMajor.map((course) => (
                  <div key={course.name}>
                    <CourseItem name={course.name} image={course.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
