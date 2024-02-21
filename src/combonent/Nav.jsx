import React from 'react'
import style from "./Nav.module.css";


function Nav() {
  return (
    <>
  <nav className={style.nav}  data-bs-theme="dark">
  <div className="container-fluid navbar navbar-expand-lg">
    <a className="navbar-brand ms-5 me-5" href="#">
      Navbar
    </a>
    <div className="collapse navbar-collapse ms-5 " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
          Careers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
          Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
          About us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
            Teachers
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav