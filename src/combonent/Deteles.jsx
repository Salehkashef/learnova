import React from "react";
import { FaStar } from "react-icons/fa";
import style from "./Deteles.module.css";
import timg from "../assets/img/Group 237.png";

function Deteles() {
  return (
    <>
      <div className={style.contaner}>
        <div className={style.raiting}>
          <div class="row">
            <div class="col-sm-3  mb-3 mb-sm-0">
            <div className={style.rait}>
            <h5>4 out of 5</h5>
            <div>
              {[...Array(5)].map((star) => {
                return (
                  <label>
                    {/* <input
                      type="radio"
                      name="raiting"
                      // value={currentRating}
                      // onClick={() => setRating(currentRating)}
                    /> */}
                    <FaStar className={style.star} />
                    {/* <i
                      className={`fa-solid fa-star `}
                      // color={
                      //   currentRating <= (hover || raiting)
                      //     ? "#fdb022"
                      //     : "#ffeeb1"
                      // }
                      // onMouseEnter={() => set}
                    ></i> */}
                  </label>
                );
              })}
            </div>
            <p>Top Raiting</p>
          </div>
            </div>
            <div class="col-sm-9 mt-3 ">
            <div>
              <div className={style.stars}>
                <p>5 Stars</p>
                <div className={style.reat}>
                  <div className={style.reatsize}></div>
                </div>
              </div>
              <div className={style.stars}>
                <p>4 Stars</p>
                <div className={style.reat}>
                  <div className={style.reatsize}></div>
                </div>
              </div>
              <div className={style.stars}>
                <p>3 Stars</p>
                <div className={style.reat}>
                  <div className={style.reatsize}></div>
                </div>
              </div>
              <div className={style.stars}>
                <p>2 Stars</p>
                <div className={style.reat}>
                  <div className={style.reatsize}></div>
                </div>
              </div>
              <div className={style.stars}>
                <p>1 Stars</p>
                <div className={style.reat}>
                  <div className={style.reatsize}></div>
                </div>
              </div>
            </div>
          </div>

       
          <div>
            

              <div className={style.text}>
                <div className="d-flex justify-content-lg-between align-items-center  mt-2">
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={timg} className={style.cardimg2} alt="" />
                    <p className="mt-3">Lina</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <i class="fa-regular fa-clock mb-3 mx-2 "></i>
                    <p className={style.botomtext}>3 Month</p>
                  </div>
                </div>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
              </div>
              <hr className={style.line} />
              <div className={style.text}>
                <div className="d-flex justify-content-lg-between align-items-center  mt-2">
                  <div className="d-flex justify-content-start align-items-center">
                    <img src={timg} className={style.cardimg2} alt="" />
                    <p className="mt-3">Lina</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <i class="fa-regular fa-clock mb-3 mx-2 "></i>
                    <p className={style.botomtext}>3 Month</p>
                  </div>
                </div>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteles;
