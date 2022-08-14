const OTP = (props) => {
    const { otp, handleChange, handleOtpSubmit } = props;

    return (
        <>
            <div
            className="login-box"
            style={{ display: "block" }}
            >
            <h2><strong>Verify OTP</strong></h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="otp" value={otp} onChange={handleChange} />
                        <label>OTP</label>
                    </div>
                    <a href="#" onClick={handleOtpSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Verify
                    </a>
                </form>
            </div>
        </>
    );
}
 
export default OTP;