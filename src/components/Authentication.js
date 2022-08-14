import { useState } from "react";
import Signup from "./Signup";
import config from "../config";
import { post } from "../services/request";
import OTP from "./OTP";
import Login from "./Login";

const Authentication = (props) => {
    const { setTokenAndAuthenticate } = props;
    const pages = [
        {
            id: "signup",
            title: "Signup"
        },
        {
            id: "login",
            title: "Login"
        },
        {
            id: "otp",
            title: "OTP"
        }
    ];

    const [onPage, setOnPage] = useState(pages[0].id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const setPage = (pageId) => {
        setOnPage(pageId);
    }

    const handleChange = (event) => {
        if(event.target.name === "name") {
            setName(event.target.value);
        }

        if(event.target.name === "email") {
            setEmail(event.target.value);
        }

        if(event.target.name === "otp") {
            setOtp(event.target.value);
        }
    }

    const handleSignUpSubmit = async () => {
        const data = await post(`${config.host}/auth/signup`, { fullName: name, email });
        const otpData = await post(`${config.host}/auth/otp/send`, { email });
        console.log(data, otpData);
        setPage(pages[2].id);
    }

    const handleOtpSubmit = async () => {
        const response = await post(`${config.host}/auth/otp/verify`, { otp, email });
        setTokenAndAuthenticate(response.data.uAccessToken, response.data.uRefreshToken);
        console.log(response.data);
    }

    const handleLoginSubmit = async () => {
        const data = await post(`${config.host}/auth/login`, { email });
        const otpData = await post(`${config.host}/auth/otp/send`, { email });
        console.log(data, otpData);
        setPage(pages[2].id);
    }

    const getPage = () => {
        if(onPage === pages[0].id) {
            return <Signup  email={email} name={name} handleChange={handleChange} handleSignUpSubmit={handleSignUpSubmit} setPage={setPage} />;
        } else if (onPage === pages[1].id) {
            return <Login  email={email} handleChange={handleChange} handleLoginSubmit={handleLoginSubmit} setPage={setPage} />;
        }else{
            return <OTP  otp={otp} handleChange={handleChange} handleOtpSubmit={handleOtpSubmit} />;
        }
    }

    return ( 
        <>
            {getPage()}
        </>
     );
}
 
export default Authentication;