import React from "react";
import error from "../../images/error.jpg";

const NotFound = () => {
  return (
    <div className=" d-flex flex-column gap-3 align-items-center justify-content-center ">
      <h1 className="text-gray fw-bold mt-3">Mechanic is sleeping!</h1>
      <img src={error} height={550} alt="" />
    </div>
  );
};

export default NotFound;
