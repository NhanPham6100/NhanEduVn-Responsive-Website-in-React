import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import "./Programs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt=""></img>
        <div className="caption">
          <p>
            <FontAwesomeIcon icon={faHatWizard} /> Graduation Degree
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt=""></img>
        <div className="caption">
          <p>
            <FontAwesomeIcon icon={faHatWizard} /> Masters Degree
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt=""></img>
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
