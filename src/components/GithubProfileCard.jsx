import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={"https://static.wixstatic.com/media/0fd650_d7596ddffc5443898657a20c387160b3~mv2.jpg"} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI?<br /> 
                        MY INBOX IS OPEN FOR ALL
                      </p>
                      <p className="text-white mt-3">
                          {"I'm a Remote Senior Full Stack Web Developer | BlockChain | Acceptable Time Zone"}
                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        {"Montreal, Canada"}
                        </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;