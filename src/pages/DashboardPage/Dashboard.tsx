import React, { useEffect, useState } from "react";
import {
	DashboardCardsGrid,
	DashboardTable,
	Sidebar,
	TopNav,
} from "../../components";
import "./Dashboard.scss";

import { getUsers } from "../../api_calls";

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			await getUsers()
				.then((data) => {
					setError(null);
					setUsers(data);
				})
				.catch((err) => {
					console.log(err);
					setError(err.message);
				});
		};

		fetchUsers();
	}, []);

	return (
		<div className="page_container">
			<div>
				<TopNav />
			</div>
			<div className="page_grid">
				<Sidebar />
				<div className="page_content">
					<h2 className="page_title">Users</h2>
					<DashboardCardsGrid />
					<DashboardTable users={users} error={error} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
