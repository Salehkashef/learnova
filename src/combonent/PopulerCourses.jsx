import React from 'react'
import './PopulerCourses.css'
import photo from '../assets/img/business-video-chat-laptop.jpg'
function PopulerCourses() {
  return (
    <>
    <section className="container text-center">
  <h1>most populer courses</h1>
  <div className="pcards container border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 ">
      <div className="row">
      <div className="pcard border-0 mt-2 ms-2">
      <img src={photo} alt="" className='pimg' />
      <button className='btn abtn'>wep design</button>
      <h4>wep Design cours</h4>
      <div className="container w-100">
        <div className="row">
          <div className="pabout clo-2">payed</div>
          <div className="pabout clo-2">reate</div>
          <div className="pabout clo-2">
          <span>price</span>
          <img src="" alt="" />
           </div>
        </div>
    </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default  PopulerCourses