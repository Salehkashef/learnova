import React from 'react'
import mainstyle from "./main.module.css";
import Cards from './Cards';
import Boton from './Boton';

function Choise() {
  return (
   <>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Get choice of your course</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

          
          <Cards />
          </div>
        </div>
   </>
  )
}

export default Choise