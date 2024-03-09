import React, { useEffect, useState } from "react";
import mainstyle from "./main.module.css";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../Redux/slices/courseslice";

function AllCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.CourseReducer.courses.Course);
  const total = useSelector((state) => state.CourseReducer.courses.Total);
  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(getCourses({ page, limit }));
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="text mt-4 d-flex justify-content-between align-items-center">
          <h3>Get choice of your course</h3>
          <span className={mainstyle.linkes}>
            <a href="#">View history</a>
          </span>
        </div>
        {courses && courses.map((item) => <Cards key={item.id} data={item} />)}
        <ul className="pagination">
          <li className="page-item">
            <button
              className={page === 1 ? "d-none" : "page-link"}
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Prev
            </button>
          </li>
          <span>Page {page}</span>
          <li className="page-item">
            <button
              className={total <= page * limit ? "d-none" : "page-link"}
              onClick={handleNextPage}
              disabled={total <= page * limit}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllCourses;
