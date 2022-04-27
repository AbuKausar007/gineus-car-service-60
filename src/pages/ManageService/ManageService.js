import React from "react";
import useServices from "../hooks/useServices/useServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h1> manage your services </h1>
      {services.map((service) => (
        <div key={service._id}>
          <h3>
            {service.name}{" "}
            <small>
              <button onClick={() => handleDelete(service._id)}>Delete</button>
            </small>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
