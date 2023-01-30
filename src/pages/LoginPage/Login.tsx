import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const toggleShowPassword = () => {
		setShowPassword((passwordIsVisible) => !passwordIsVisible);
	};

	const onSubmitForm = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="loginPage">
			<div className="page_container">
			<div className="logo_container">
						<img src="/images/logo.svg" alt="lendsqr logo" />
					</div>
				<div className="page_grid">
				<div className="loginPage_left">
					<div className="illustration_img">
						<img src="/images/sign-in-img.svg" alt="" />
					</div>
				</div>
				<div className="loginPage_right">
					<div>
						<h2 className="welcome_title">Welcome!</h2>
						<h5 className="subtitle">Enter details to login.</h5>
						<form className="login_form" onSubmit={onSubmitForm} onSubmitCapture={onSubmitForm}>
							<div className="email_input_container">
								<input
									autoComplete="off"
									type="email"
									placeholder="Email"
									className="email_input"
								/>
							</div>
							<div className="password_input_container">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Password"
								/>
								<span id="show_password_btn" onClick={toggleShowPassword}>
									{showPassword ? "HIDE" : "SHOW"}
								</span>
							</div>
							<a href="#" className="forgot_password_link">
								FORGOT PASSWORD?
							</a>
							<div className="login_btn_container">
								<Link to="/dashboard">
									<button id="login_btn">LOG IN</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
