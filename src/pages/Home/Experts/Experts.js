import React from "react";
import expart1 from "../../../images/experts/expert-1.jpg";
import expart2 from "../../../images/experts/expert-2.jpg";
import expart3 from "../../../images/experts/expert-3.jpg";
import expart4 from "../../../images/experts/expert-4.jpg";
import expart5 from "../../../images/experts/expert-5.jpg";
import expart6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const exparts = [
    { id: 1, name: "Will Smith", img: expart1 },
    { id: 2, name: "Chris Rock", img: expart2 },
    { id: 3, name: "Dwyane Johnson", img: expart3 },
    { id: 4, name: "Roman Reings", img: expart4 },
    { id: 5, name: "Seth Rollins", img: expart5 },
    { id: 6, name: "Dean Ambrose", img: expart6 },
  ];
  return (
    <div id="experts" className="container ease-in-out">
      <h1 className="text-primary text-center pt-5 fw-bold">Our Exparts.</h1>
      <div className="row">
        {exparts.map((expart) => (
          <Expert key={expart.id} expart={expart}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
