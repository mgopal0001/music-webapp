const Login = (props) => {
    const { email, handleChange, handleLoginSubmit, setPage } = props;

    return (
        <>
            <div
            className="login-box"
            style={{ display: "block" }}
            >
            <h2><strong>Login</strong></h2>
                <form>
                    <div className="user-box">
                        <input type="email" name="email" value={email} onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <a href="#" onClick={handleLoginSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </a>
                </form>
            </div>
            <div className="bottom-section">
                Not registered {" "}
                <a href="#" onClick={() => setPage("signup")}>
                    Signup
                </a>
                {" "} here
            </div>
        </>
    );
}
 
export default Login;