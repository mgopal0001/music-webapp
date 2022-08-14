const Signup = (props) => {
    const { name, email, handleChange, handleSignUpSubmit, setPage } = props;
    return (
        <>
            <div
            className="login-box"
            style={{ display: "block" }}
            >
            <h2><strong>Register</strong></h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="name" value={name} onChange={handleChange} />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="email" value={email} onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <a href="#" onClick={handleSignUpSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Signup
                    </a>
                </form>
            </div>
            <div className="bottom-section">
                Already registered {" "}
                <a href="#" onClick={() => setPage("login")}>
                    Login
                </a>
                {" "} here
            </div>
        </>
    );
}
 
export default Signup;