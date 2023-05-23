import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="big-title text-dark">
            Explore Africa’s Largest network of <span className="text-purple">Web3 Builders</span>
            </h1>
            <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-purple m-r-20 btn-md m-t-30 "
            >
              Download Free Courses
            </a>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
