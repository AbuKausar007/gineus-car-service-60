import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1 className="text-center text-primary fw-bold py-3">
        Wellcome to servie details: {serviceId}
      </h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary ">Proceed To CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
