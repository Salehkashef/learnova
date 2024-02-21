import React from 'react'
import './StudentsOpinion.css'
import img from "../assets/img/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually.jpg"

function StudentsOpinion() {
  return (
    <>
    <section className="container text-center">
  <h1>
    What students say <br /> about us
  </h1>
  <div className="container">
    <div className="row">
      <div className="col-4 mt-5">
      <img id="img1"  src={img} />
      </div>
      <div className="col-8 text">
        <p>
        Figma ipsum component variant main layer. Community pencil bold variant edit rotate main <br />
        variant stroke. Flatten component slice move draft flows inspect. Inspect scale undo arrow <br />
        export union object selection text star. Duplicate list group pencil scrolling thumbnail undo.
        </p>
        <span className='text-start'>name</span>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default StudentsOpinion