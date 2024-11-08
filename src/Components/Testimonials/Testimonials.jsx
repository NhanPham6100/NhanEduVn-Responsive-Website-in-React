import React, { useRef } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-1.jpg";
import user_3 from "../../assets/user-1.jpg";
import user_4 from "../../assets/user-1.jpg";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      ></img>
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      ></img>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt=""></img>
                <div>
                  <h3>Nhan Pham Thanh</h3>
                  <span>Ha Noi, Viet Nam</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Ha Noi was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt=""></img>
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Ha Noi was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt=""></img>
                <div>
                  <h3>Nhan Pham Thanh</h3>
                  <span>Ha Noi, Viet Nam</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Ha Noi was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt=""></img>
                <div>
                  <h3>Nhan Pham Thanh</h3>
                  <span>Ha Noi, Viet Nam</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Ha Noi was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
