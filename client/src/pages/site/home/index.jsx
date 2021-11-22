import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../context";
import Card from "../../../components/card";
import SlideShow from "../../../components/slide";
// import Majors from "../../../apis/majors";

const HomePage = () => {
  const {
    majorState: { isLoading, majors },
  } = useStore();

  return (
    <div className="mt-4">
      <div>
        <SlideShow />
      </div>

      <div className="page__home bg-white">
        <div className="text-gradient mx-10 mt-12 w-max">
          <p className="text-2xl text-white font-bold pt-2 pl-14">
            Danh mục khoá học
          </p>
        </div>
        <div className="grid grid-cols-4 mt-16 mx-10">
          {isLoading ? (
            <div className="loader">
              <div className="spinner"></div>
            </div>
          ) : (
            majors.map((major) => (
              <div key={major._id}>
                <Link to={"categories/" + major.slug}>
                  <Card name={major.name} img={major.image} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
