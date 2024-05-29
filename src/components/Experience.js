import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EDUCATION</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "#F9E79F" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "#87CEFA" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "#82E0AA" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "#82E0AA" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;