/* import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardImgOverlay,
  Col,
} from "reactstrap";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";

const CustomCard = () => {
  return (
    <>
      <div
        className=""
        style={{
          opacity: 0.75,
          zIndex: 1,
          padding: 20,
        }}
      >
        <LightSpeed>
          <Roll>
            {" "}
            <h2 className="presentation-subtitle text-center">
              <strong style={{ fontWeight: 600 }}>SPL TEAMS</strong>
            </h2>
          </Roll>
          <hr />
          <br />
          <div className="responsive-cards custom-flex">
            {" "}
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive blur"
                  src={require("assets/img/lol-wallpaper.jpg")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    League of Lengends
                  </h6>
                </div>
              </Link>
            </Col>
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/cs-go-wallpaper.png")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    Counter Strike
                  </h6>
                </div>
              </Link>
            </Col>
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/valorant-wallpaper.jpg")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    Valorant
                  </h6>
                </div>
              </Link>
            </Col>
          </div>
        </LightSpeed>
      </div>
    </>
  );
};

export default CustomCard;
 */

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} />,
  <img src="path-to-img" onDragStart={handleDragStart} />,
  <img src="path-to-img" onDragStart={handleDragStart} />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Gallery