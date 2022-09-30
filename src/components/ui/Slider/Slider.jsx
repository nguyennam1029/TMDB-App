import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./slider.css";
function Slider() {
  return (
    <div className="slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="http://techrum.vn/chevereto/images/2016/06/29/WwP15.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://media.ngoisao.vn/news/2019/05/11/avas-ngoisao.vn-w1116-h670.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://tapchisieuxe.com/uploads/images/bai-viet/sao-va-sieu-xe/avengers/dan-sao-sieu-anh-hung-avengers-ngoai-doi-thuc-di-sieu-xe-gi-0-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
