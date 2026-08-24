import './login.css'

function Login() {
    return (
        <div id="login-container">
            <div id="login-box">

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    required
                />

                <button type='submit'>Login</button>

                <p>
                    Don't have an account? <a>Sign Up</a>
                </p>

            </div>
        </div>
    )
}

export default Login