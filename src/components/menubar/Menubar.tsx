import React from "react";
import './menubar.scss'
import { useNavigate } from "react-router-dom";


const logo = require("../../assets/logoalta.png")
const element4 = require("../../assets/element-4.png")
const logouticon = require("../../assets/fi_log-out.png")
const settingicon = require("../../assets/setting.png")
const moreicon = require("../../assets/fi_more-vertical.png")
const frameicon = require("../../assets/Frame.png")
const dashboardicon = require("../../assets/icondasboard03.png")
const dichvuicon = require("../../assets/Frame332.png")
const thietbiicon = require("../../assets/monitor.png")

export interface MenuBarProps { }

const MenuBar: React.FunctionComponent<MenuBarProps> = (props) => {
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
                    <div className="setting-wrapper">
                        <div className="setting-btn">
                            <img src={settingicon} className="settingicon" alt="" />
                            <a className="a-3">Cài đặt hệ thống</a>
                            <img src={moreicon} className="moreicon" alt="" />
                        </div>
                    </div>
                    <div className="baocao-wrapper">
                        <div className="baocao-btn">
                            <img src={frameicon} className="frameicon" alt="" />
                            <a className="a-4">Báo cáo</a>
                        </div>
                    </div>
                    <div className="capso-wrapper">
                        <div className="capso-btn">
                            <img src={dashboardicon} className="dashboardicon" alt="" />
                            <a className="a-5">Cấp số</a>
                        </div>
                    </div>
                    <div className="dichvu-wrapper">
                        <div className="dichvu-btn">
                            <img src={dichvuicon} className="dichvuicon" alt="" />
                            <a className="a-6">Dịch vụ</a>
                        </div>
                    </div>
                    <div className="thietbi-wrapper">
                        <div className="thietbi-btn">
                            <img src={thietbiicon} className="thietbiicon" alt="" />
                            <a className="a-7">Thiết bị</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuBar;