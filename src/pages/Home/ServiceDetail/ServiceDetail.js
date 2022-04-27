import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-primary fw-bold py-3">
        You are about to book : {service.name}
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
