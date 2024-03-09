import { Button } from "bootstrap";
import ClampLines from "react-clamp-lines";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaGlobe, FaComment } from "react-icons/fa";
import img from "../assets/img/business-video-chat-laptop.jpg";

function INSTRUCTOR() {
  function handleChat() {
    // Add your chat handling logic here
  }

  // Fake data for instructor profile
  const instructorData = {
    name: "Maximilian Schwarzmüller",
    certification: "AWS Certified, Professional Web Developer and Instructor",
    totalStudents: "2,871,957",
    reviews: "1,061,922",
    aboutMe:
      "I'm passionate about teaching and have been helping students learn web development and AWS for years. My courses are designed to be comprehensive and practical, ensuring students gain real-world skills.",
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/maximilian-schwarzm%C3%BCller-b4813a117/",
      facebook: "https://www.facebook.com/academindchannel",
      website: "https://academind.com/",
    },
  };

  return (
    <>
      <div className="container mt-5">
        <section className="row">
          <div className="col-lg-7">
            <div>
              <p className="text-muted">INSTRUCTOR</p>
              <h2>{instructorData.name}</h2>
              <p className="text-secondary">{instructorData.certification}</p>
              <div className="mb-4 row">
                <div className="col-6">
                  <p>Total Students</p>
                  <h3>{instructorData.totalStudents}</h3>
                </div>
                <div className="col-6">
                  <p>Reviews</p>
                  <h3>{instructorData.reviews}</h3>
                </div>
              </div>

              <h3>About Me</h3>

              <ClampLines
                text={instructorData.aboutMe}
                lines={2}
                ellipsis="..."
                moreText="Expand"
                lessText="Collapse"
                className="custom-class"
                innerElement="p"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4">
              <div
                className="rounded-circle overflow-hidden border border-secondary"
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={img}
                  alt="Instructor"
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>

            <div>
              <NavLink
                to={instructorData.socialMedia.linkedin}
                className="btn btn-outline-primary mb-2 d-block"
              >
                <FaLinkedin /> LinkedIn
              </NavLink>
              <NavLink
                to={instructorData.socialMedia.facebook}
                className="btn btn-outline-primary mb-2 d-block"
              >
                <FaFacebook /> Facebook
              </NavLink>
              <NavLink
                to={instructorData.socialMedia.website}
                className="btn btn-outline-primary mb-2 d-block"
              >
                <FaGlobe /> Website
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default INSTRUCTOR;
