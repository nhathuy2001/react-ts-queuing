import React from "react";
import './account.scss'
import { useNavigate } from "react-router-dom";

const logo = require("../../assets/logoalta.png")
const element4 = require("../../assets/element-4.png")
const logouticon = require("../../assets/fi_log-out.png")

export interface AccountProps { }

const AccountPage: React.FunctionComponent<AccountProps> = (props) => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/');
    }

    return (
        <>
            <div className="menubar-wrapper">
                <div className="menubar">
                    <img src={logo} className="logo" alt="" />
                    <div className="dashboard-btn">
                        <div className="dashboard-item">
                            <img src={element4} className="element4" alt="" />
                            <a className="a1">Dashboard</a>
                        </div>
                    </div>
                    <div className="logout-wrapper" onClick={navigateToLogin}>
                        <div className="logout-btn">
                            <img src={logouticon} className="logouticon" alt="" />
                            <a className="a-2">Đăng xuất</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AccountPage;