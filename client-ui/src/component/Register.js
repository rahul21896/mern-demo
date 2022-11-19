import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import logo from "../media/logo.png";
import {Link} from "react-router-dom";

class Register extends React.Component{
    render() {
        return(
            <div className={`flex-div`}>
                <div>
                    <Row>
                        <Col>
                            <img src={logo} alt="Dev Rahul" className={`logo_small`}/>
                        </Col>
                    </Row>
                    <div className="login_form">
                        <Row>
                            <Col>
                                <h4 className={`form_title`}>Register</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="email" name={`email`} className={`form-control`} placeholder={`Enter Your Email`}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text" name={`name`} className={`form-control mt-15`} placeholder={`Enter Your Name`}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="password" name={`password`} className={`form-control mt-15`} placeholder={`Enter Your Password`}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className={`submit_button`}>Register</Button>
                                <Link className={`ml-10 register_link`} to={`/login`}>Already have account ? Login Here</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;