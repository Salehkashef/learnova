import React from "react";
import style from "./Corsdetelshed.module.css";
import img from "../assets/img/Group236.png";
import cimg from "../assets/img/business-video-chat-laptop.jpg";
import mainstyle from "./main.module.css";
import { NavLink } from 'react-router-dom';
import Deteles from "./Deteles";

function Corsdetelshed() {
  return (
    <>
      <section>
        <img className={style.bigimg} src={img} />
        <div className="container mt-4">
          {/* <div className="row">
            <div className="col-8">
              <div className="btn d-flex align-items-start">
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
                <button className={style.btnn}>Overview</button>
              </div> */}

              <div class="row">
                <div class="col-sm-8  mb-3 mb-sm-0 mt-5">
                  <Deteles />
                </div>
                <div class="col-sm-3 ms-5  mb-3 mb-sm-0">
                <div className={`card border-0 h-100 d-flex justify-content-center align-items-center ${style.card}`}>
                <img src={cimg} className={style.cardimg} />
                <div className={`card-body`}>
                  <div className="techerimg d-flex justify-content-lg-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center  mt-2">
                      <h3>$49.65</h3>
                    </div>
                    <div className=" d-flex justify-content-end align-items-center mt-3">
                      <span>
                        <p className={mainstyle.lin}> $99.99</p>
                      </span>
                      <p className={style.botomtext}>50%Off</p>
                    </div>
                  </div>
                  <p className={`card-title text-center   ${mainstyle.linkes}`}>
                    11 hour left at this price
                  </p>
                  <button className={style.btn}><NavLink className="nav-link active ms-3 me-3" to="/checkout">Buy Now</NavLink></button>
                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <div className=" d-flex  align-items-center mt-3">
                      <span>
                        <p className={mainstyle.lin}> $99.99</p>
                      </span>
                      <p className={style.botomtext}>Money Back Guarantee</p>
                    </div>
                  <div className=" d-flex  align-items-center">
                      <span>
                        <p className={mainstyle.lin}> $99.99</p>
                      </span>
                      <p className={style.botomtext}>Access on all devices</p>
                    </div>
                  <div className=" d-flex  align-items-center">
                      <span>
                        <p className={mainstyle.lin}> $99.99</p>
                      </span>
                      <p className={style.botomtext}>Certification of completion</p>
                    </div>
                  <div className=" d-flex  align-items-center">
                      <span>
                        <p className={mainstyle.lin}> $99.99</p>
                      </span>
                      <p className={style.botomtext}>32 Moduls</p>
                    </div>
                  <hr className={style.line} />
                  <h4>This Course included</h4>
                  <p className="w75">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>
              </div>
            </div>

                </div>
              </div>


          {/* </div>
        </div> */}
      </section>
    </>
  );
}

export default Corsdetelshed;
