import React from "react";
import style from './Fav.module.css'
import artimg from "../assets/img/art.png";
import busnes from "../assets/img/bag.png";
import photografy from "../assets/img/book.png";
import data from "../assets/img/data.png";
import wep from "../assets/img/wep.png";
import vedus from "../assets/img/vedet.png";
import marketing from "../assets/img/marct.png";


function Fav() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
            <h3>Choice favourite course from top category</h3>
          </div>
          <section>
            <div className="cards ">
              <div className="row mt-4 ">
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard1}>
                      <img className={style.artimg} src={artimg} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Design</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard2}>
                      <img className={style.artimg} src={wep} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Development</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard3}>
                      <img className={style.artimg} src={data} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Development</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard4}>
                      <img className={style.artimg} src={busnes} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Business</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard5}>
                      <img className={style.artimg} src={marketing} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Marketing</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard6}>
                      <img className={style.artimg} src={photografy} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Photography</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard7}>
                      <img className={style.artimg} src={vedus} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Acting</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
                <div
                  className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className={style.imgcard4}>
                      <img className={style.artimg} src={busnes} alt="" />
                    </div>
                    <h5 className="card-title mt-3">Business</h5>
                   <p className="w-80 mt-3 mb-1">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
                   </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Fav;
