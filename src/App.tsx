import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "./pages";

import "./fonts/AvenirNextLTPro-It.otf";
import "./fonts/AvenirNextLTPro-Regular.otf";
import "./fonts/AvenirNextLTPro-Bold.otf";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
