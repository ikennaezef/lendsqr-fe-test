import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
	const [inputValues, setInputValues] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const navigate = useNavigate();

	const toggleShowPassword = () => {
		setShowPassword((passwordIsVisible) => !passwordIsVisible);
	};

	const onInputChange = (value: string, inputName: string) => {
		setInputValues({
			...inputValues,
			[inputName]: value,
		});
	};

	const onSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		if (inputValues.email === "" || inputValues.password === "") {
			setError(true);
		} else {
			navigate("/dashboard");
		}
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
							<form
								className="login_form"
								onSubmit={onSubmitForm}
								onSubmitCapture={onSubmitForm}>
								<div className="email_input_container">
									<input
										autoComplete="off"
										type="email"
										placeholder="Email"
										className="email_input"
										value={inputValues.email}
										onChange={(e) => onInputChange(e.target.value, "email")}
									/>
								</div>
								<div className="password_input_container">
									<input
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										value={inputValues.password}
										onChange={(e) => onInputChange(e.target.value, "password")}
									/>
									<span id="show_password_btn" onClick={toggleShowPassword}>
										{showPassword ? "HIDE" : "SHOW"}
									</span>
								</div>
								{error && (
									<div className="error_container">
										<span className="error_message">
											Please fill all the fields
										</span>
									</div>
								)}
								<button className="forgot_password_link">
									FORGOT PASSWORD?
								</button>
								<div className="login_btn_container">
									<button id="login_btn">LOG IN</button>
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
