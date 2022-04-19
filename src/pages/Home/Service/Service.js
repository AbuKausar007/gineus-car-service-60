import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  const handleServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} width="full" alt="" />
      <h2 className="text-primary fw-normal">{name}</h2>
      <h3 className="fw-bold">Price: ${price}</h3>
      <p>{description}</p>
      <button
        onClick={() => handleServiceDetails(id)}
        className="btn btn-primary mb-3"
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;
