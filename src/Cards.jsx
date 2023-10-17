import React from "react";
const Cards = (props) => {
    return(
        <>
        <div className="card my-5" style={{width: "18rem"}}>
              <img src={props.imgsrc} className="card-img-top card-img" alt="food" />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.des}
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Order Now
                </button>
              </div>
            </div>
        </>
    );
};

export default Cards;