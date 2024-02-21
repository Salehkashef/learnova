import React from 'react'
import style from "./Corsdetelshed.module.css";
import img from '../assets/img/Group236.png'
import Deteles from './Deteles';


function Corsdetelshed() {
  return (
    <>
    <section>
    <img className={style.bigimg} src={img}/>
    <div className="container">
          <div className="row">
          <div className="col-8">
            <Deteles />
          </div>
          <div className="col-4">

          </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Corsdetelshed