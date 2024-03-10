import { Button } from "bootstrap";
import ClampLines from "react-clamp-lines";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaGlobe, FaComment } from "react-icons/fa";
import img from "../assets/img/business-video-chat-laptop.jpg";

import { useDispatch, useSelector } from "react-redux";
import getInstructorData from "../Redux/slices/InstructorSlice";

function INSTRUCTOR() {
  const dispatcher = useDispatch();
  const Instructordata = useSelector(
    (state) => state.InstructorReducer.instructor
  );
  console.log(Instructordata);

  seEffect(() => {
    dispatcher(getInstructorData());
  }, []);

  return (
    <>
      <div className="container mt-5">
        <section className="row">
          <div className="col-lg-7">
            <div>
              <p className="text-muted">INSTRUCTOR</p>
              <h2>{}</h2>
              <p className="text-secondary">{}</p>
              <div className="mb-4 row">
                <div className="col-6">
                  <p>Total Students</p>
                  <h3>{}</h3>
                </div>
                <div className="col-6">
                  <p>Reviews</p>
                  <h3>{}</h3>
                </div>
              </div>

              <h3>About Me</h3>

              {/* <ClampLines
                text={}
                lines={2}
                ellipsis="..."
                moreText="Expand"
                lessText="Collapse"
                className="custom-class"
                innerElement="p"
              /> */}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4  ">
              <div
                className="rounded-circle overflow-hidden border border-secondary m-auto "
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={img}
                  alt="Instructor"
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>

            <div className="m-3">
              <NavLink className="btn btn-outline-primary mb-2 d-block">
                <FaLinkedin /> LinkedIn
              </NavLink>
              <NavLink className="btn btn-outline-primary mb-2 d-block">
                <FaFacebook /> Facebook
              </NavLink>
              <NavLink className="btn btn-outline-primary mb-2 d-block">
                <FaGlobe /> Website
              </NavLink>
            </div>
          </div>
        </section>
        <section>
          <h1>My courses</h1>
        </section>
      </div>
    </>
  );
}

export default INSTRUCTOR;
