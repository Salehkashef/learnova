import React from "react";
import Cards from "./Cards";
import mainstyle from "./main.module.css";

function Markting() {
  return (
    <>
      <div className={mainstyle.container}>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Marketing Articles</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

            {/* <Cards /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Markting;
