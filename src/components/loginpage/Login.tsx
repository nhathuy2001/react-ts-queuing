import React from "react";
import { useState, } from "react";
import { Form } from "react-router-dom";
import './login.scss'
import { useNavigate } from "react-router-dom";


const logo = require("../../assets/logoalta.png")
const loginpic = require("../../assets/loginpic.png")
const icon = require("../../assets/icon1.png")

export interface LoginProps { }

const LoginPage: React.FunctionComponent<LoginProps> = (props) => {
    // //     const navigate = useNavigate();
    // //   const { login } = authenticationPresenter;
    // //   const loginByAccount = useSingleAsync(login);
    // //   const [errorStatus, setErrorStatus] = useState('');
    // //   const onFinishFailed = () => {
    // //     setErrorStatus('');
    //   };                          
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/Home');
    }
    return (
        <>
            <div className="LoginPage-Wrapper">
                <div className="Login-form">
                    <img src={logo} className="logo" alt="" />
                    <div className="username">
                        <label className="namecontent">Tên đăng nhập*</label>
                        <input className="nameform" type="name" />
                    </div>
                    <div className="userpasswork">
                        <label className="passworkcontent">Mật khẩu*</label>
                        <input className="passworkform" type="passwork" ></input>
                        <div className="icon-frame">
                            <img
                                className="hide-icon position-absolute top-50 end-0 translate-middle"
                                src={icon}
                                alt=""
                            />
                        </div>
                    </div>
                    <span className="forgetpasswork-content">Quên mật khẩu?</span>
                    <button className="login-btn" onClick={navigateToHome}>
                        <span className="login-btn-content">Đăng nhập</span>
                    </button>
                </div>
                <div className="background-pic">
                    <img src={loginpic} className="loginpic" alt="" />

                </div>
            </div>

        </>
    )
}

export default LoginPage;