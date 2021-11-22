import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClassItem from "./components/ClassItem";
import CourseDetail from "../course/components/MajorDetail";
import Class from "../../../apis/class";
import { useStore, actionsClass } from "../../../context";

const ClassPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [load, setLoad] = useState(true);
  const {
    classState: { classesCourse },
    dispatchClass,
    courseState: { courseMajor },
  } = useStore();
  console.log(classesCourse);
  useEffect(() => {
    setCourse(courseMajor.find((course) => course.name === id));
  }, [id, courseMajor]);

  useEffect(() => {
    const fetchData = async () => {
      if (course?._id) {
        try {
          const response = await Class.getClassCourse(course._id);
          console.log(response);
          if (response) {
            dispatchClass(actionsClass.classActions.get_class_course(response));
            setLoad(false);
          }
        } catch (error) {
          console.log("looix khoa hocj");
          // <Redirect to="/notfound" />;
        }
      }
    };

    fetchData();
    // if (classesCourse[0]?.courseId !== course?._id) {
    // } else {
    //   setLoad(false);
    // }
  }, [course?._id, dispatchClass]);

  return (
    <div className="page bg-white">
      <div className="mx-10">
        <div className="text-gradient w-max pr-10">
          <p className="text-2xl text-white pt-2 pl-14">{course?.name}</p>
        </div>

        {load ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            <div className="mt-14">
              <CourseDetail
                description={course?.description}
                image={course?.image}
              />
            </div>

            <div>
              <p className="text-2xl font-bold my-8">Danh sách lớp học</p>

              <div className="grid gap-10 grid-cols-3">
                <div className="col-span-2">
                  {classesCourse.length > 0
                    ? classesCourse.map((classeCourse) => (
                        <ClassItem
                          key={classeCourse.classCode}
                          name={classeCourse.classCode}
                          teacher={classeCourse.teacherId?.fullName}
                        />
                      ))
                    : "Tạm thời chưa có lớp học nào..."}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassPage;
