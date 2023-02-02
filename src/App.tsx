import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Dashboard, Login, UserDetails } from "./pages";
import "./App.scss";

import "./fonts/AvenirNextLTPro-It.otf";
import "./fonts/AvenirNextLTPro-Regular.otf";
import "./fonts/AvenirNextLTPro-Bold.otf";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/userdetails/:id" element={<UserDetails />} />
				<Route path="/" element={<Navigate to="/login" />} />
			</Routes>
		</Router>
	);
};

export default App;
