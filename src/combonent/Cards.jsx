import style from "./Corsesheder.module.css";
import timg from "../assets/img/Group 237.png";
import mainstyle from "./main.module.css";

function Cards({ data }) {
  // console.log(data);
  return (
    <div className="col">
      <div className="card shadow border-0 h-100 d-flex justify-content-center align-items-center">
        <img
          src={`http://localhost:4000/imgs/${data.imgURL}`}
          className={style.cardimg}
        />
        <div className="card-body">
          <div className="techerimg d-flex justify-content-lg-between align-items-center">
            <div className="d-flex justify-content-start align-items-center mt-2">
              <i className="fa-regular fa-pen-fancy mb-3 mx-2"></i>
              <p className={style.botomtext}>Design</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-2">
              <i className="fa-regular fa-clock mb-3 mx-2"></i>
              <p className={style.botomtext}>{data.duration} hour</p>
            </div>
          </div>
          <h5 className="card-title">{data.title}</h5>
          <p className={style.botomtext}>{data.description}</p>
          <div className="techerimg d-flex justify-content-lg-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img src={timg} className={style.cardimg2} alt="Lina" />
              <p className="mt-3">Lina</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <p className={mainstyle.linkes}>$100</p>
              <p className={mainstyle.linkes}>$80</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
