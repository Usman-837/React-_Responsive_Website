import React from "react";
import Cards from "./Cards";
import Array from "./Array";

const Servises = () => {
  return (
    <>
    <div className="my-3">
        <h1 className="text-center">OUR SERVISES</h1>
    </div>
      <div className="container-fluid my-1">
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-center">
              {
                  Array.map((value, ind) => {
                      return(
                      <Cards 
                          key = {ind}
                          imgsrc = {value.img}
                          title = {value.title}
                          des = {value. description }
                      />
                      );          
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servises;
