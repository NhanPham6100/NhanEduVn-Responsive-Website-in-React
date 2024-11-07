import React from "react";
import program from "../../assets/program.png";
import "./Programs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program} alt=""></img>
        <div className="caption">
          <p>
            <FontAwesomeIcon icon={faHatWizard} /> Graduation Degree
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program} alt=""></img>
        <div className="caption">
          <p>
            <FontAwesomeIcon icon={faHatWizard} /> Masters Degree
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program} alt=""></img>
        <div className="caption">
          <p>
            <FontAwesomeIcon icon={faHatWizard} /> Post Graduation Degree
          </p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
