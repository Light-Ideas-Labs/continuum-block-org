/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/Handcoding-rafiki.png";
import img2 from "../../../assets/images/features/feature13/Programming-pana.png";
import img3 from "../../../assets/images/features/feature13/Handcoding-amico1.png";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">What you’ll get</h1>
              <h6 className="subtitle">
                Unlock Your Potential: Empowering Minds, Inspiring Growth
              </h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <Card body className="card card-shadow">
                <CardTitle ><i className="fa fa-code"></i> Interaction</CardTitle>
                <CardText>
                  The social interaction in development goes beyond the team itself. 
                  It extends to external teams and clients. 
                  The team ensures that their goals are aligned with the end-user
                  </CardText>
                </Card>
              </Col>
              <Col lg="4" md="4" className="wrap-feature4-box">
                <Card body className="card card-shadow">
                  <CardTitle ><i className="fa fa-laptop"></i> Learning</CardTitle>
                  <CardText>
                    Developers learn something new about the development process.
                    They stumble upon ways of performing a particular task and learn a lot as builders.
                    </CardText>
                  </Card>
                </Col>
                <Col lg="4" md="4" className="wrap-feature4-box">
                  <Card body className="card card-shadow">
                    <CardTitle ><i className="fa fa-github"></i> Collaboration</CardTitle>
                    <CardText>
                      The effective collaboration helps devs to broaden their horizons and 
                      understand the various perspective of others, share responsibilities and perform as a unit.
                      </CardText>
                    </Card>
                </Col>
                <Col lg="4" md="4">
              <Card body className="card card-shadow">
                <CardTitle ><i className="fa fa-users"></i> Networking</CardTitle>
                <CardText>
                Through conversations developers get the platform to meet, communicate, collaborate with other developers and also guide you through your code problems,
                  </CardText>
                </Card>
              </Col>
              <Col lg="4" md="4" className="wrap-feature4-box">
                <Card body className="card card-shadow">
                  <CardTitle ><i className="fa fa-star"></i> Rewards</CardTitle>
                  <CardText>
                  Developers earn NFTs upon completion of every project. They are delivered to their wallet, one that is possible to view on OpenSea..
                    </CardText>
                  </Card>
                </Col>
                <Col lg="4" md="4" className="wrap-feature4-box">
                  <Card body className="card card-shadow">
                    <CardTitle ><i className="fa fa-cogs"></i> Skills</CardTitle>
                    <CardText>
                    Devs gain skills like smart contract dev For those who would want to write 
                    the high-stakes backend code for the future of money, 
                    this is the skill you want.
                      </CardText>
                    </Card>
                </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-warning label-rounded">FEEDBACK</span>
              <h2 className="title">We help not one, but all levels and categories of developers</h2>
              {/* <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6> */}
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="4">
              <Card className="bg-light rounded">
                        <Image
                          src={img1}
                          height="350"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                                            <CardTitle className="center">Junior developers</CardTitle>
                    <CardBody className="d-flex no-block">



                        <CardText className="justify-center" >
                        You will be able to understand the value you provide, how to write code oftenly and practising to reach high levels of profeciency. 
                        You will also learn to handle complexity and advance your design skills. 
                        Experience will give you this skill, but reading on the topic and practicing your design skills won’t hurt.
                        </CardText>

                    </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="bg-light">
              <Image
                          src={img2}
                          height="350"
                          width="100"
                          className="rounded"
                          alt="img"
                        />

                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">

                      </div>
                      <div>
                        <p>
                        Make the jump from React to Web3. 
A project where you'll learn some 
Solidity, write and deploy a smart 
contract to the Celo blockchain and 
build a Web3 client app to interact 
with your contract.
                        </p>
                      </div>
                    </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="bg-light">
              <Image
                          src={img3}
                          height="250"
                          width="100"
                          className="rounded"
                          alt="img"
                        />

                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">

                      </div>
                      <div>
                        <p className="font-medium">
                        You will be able to understand the 
value you provide, how to write code
oftenly and practising to reach high 
levels of profeciency. You will also
learn to handle complexity and 
advance your design skills. 
Experience will give you this skill, 
but reading on the topic and practicing 
your design skills won’t hurt.
                        </p>
                      </div>
                    </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer bg-light ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">
                    Join other <span className="text-purple">developers</span> and <span className="text-purple">build</span> the blocks!
                    </h3>
                    <p>
                    Isn't this just amazing? There is no power for change greater than a community discovering what it cares about.
                    Cheers to the new age where sharing knowledge and togetherness have become the order of the day. 
                    </p>
                    <a
                      className="btn btn-purple btn-md btn-arrow m-t-20"
                      href="#">
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
