import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../menubar/Menubar";
import './home.scss'

const logo = require("../../assets/logoalta.png")
const element4 = require("../../assets/element-4.png")
const logouticon = require("../../assets/fi_log-out.png")

export interface HomeProps { }



const HomePage: React.FunctionComponent<HomeProps> = (props) => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/');
    }
    return (
        <>
            <MenuBar></MenuBar>
        </>
    )
}

export default HomePage;