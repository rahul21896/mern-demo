import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../media/logo.png";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {registerUser} from "../controllers/RegisterController";

function Register(){
    const { register, handleSubmit } = useForm();
    const [emailError,setEmailError] = useState(false);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [isSubmitted,setIsSubmitted] = useState(false);

    const onSubmit = (data, e) => {
        registerUser(data).then(d => {
            e.target.reset();
            setIsSubmitted(true);
            setTimeout(function () {
                setIsSubmitted(false);
            },5000);
        })
    };

    const onChangeEmail = (e) => {
        let email = e.target.value;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            setEmailError(false);
            setBtnDisabled(false);
        }else{
            setEmailError(true);
            setBtnDisabled(true);
        }
    };

    return(
            <div className={`flex-div`}>
                <div>
                    <Row>
                        <Col>
                            <Link to={'/'}>
                                <img src={logo} alt="Dev Rahul" className={`logo_small`}/>
                            </Link>
                            { isSubmitted && <p className={`success`}>User Registered Successfully.</p> }
                        </Col>
                    </Row>
                    <div className="login_form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <h4 className={`form_title`}>Register</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input {...register("email")} type="email" onInput={onChangeEmail} name={`email`} className={`form-control`} placeholder={`Enter Your Email`} required={true}/>
                                    { emailError && <p className={`error`}>Please Enter Valid Email abc@xyz.com</p> }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input {...register("name")} type="text" name={`name`} className={`form-control mt-15`} placeholder={`Enter Your Name`} required={true}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input {...register("password")} type="password" name={`password`} className={`form-control mt-15`} placeholder={`Enter Your Password`} required={true}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button type='submit' className={`submit_button`} disabled={btnDisabled}>Register</button>
                                    <Link className={`ml-10 register_link`} to={`/login`}>Already have account ? Login Here</Link>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        );
};

export default Register;