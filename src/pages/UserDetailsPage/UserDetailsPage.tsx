import React, { useEffect, useState } from "react";
import "./UserDetailsPage.scss";
import { getUserDetails } from "../../api_calls";
import { Sidebar, TopNav, UserInfo } from "../../components";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import {
	UserDetailProps,
	UserDetailsType,
} from "../../components/UserInfo/UserInfo";

const UserDetailsPage = () => {
	const [error, setError] = useState<null | string>(null);
	const [userDetails, setUserDetails] = useState<UserDetailsType>(
		{} as UserDetailsType
	);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const fetchUserDetails = async () => {
			if (id) {
				await getUserDetails(id)
					.then((data) => {
						setError(null);
						setUserDetails(data);
						console.log(data);
					})
					.catch((err) => {
						console.log(err);
						setError(err.message);
					});
			}
		};

		fetchUserDetails();
	}, [id]);

	return (
		<div className="page_container">
			<div>
				<TopNav />
			</div>
			<div className="page_grid">
				<Sidebar />
				<div className="page_content">
					<div className="button_container">
						<Link to="/dashboard">
							<button className="back_btn">
								<HiArrowLongLeft /> Back to Users
							</button>
						</Link>
					</div>
					<div className="page_title_container">
						<h2 className="page_title">User Details</h2>
						<div className="user_action_buttons">
							<button className="blacklist_btn">BLACKLIST USER</button>
							<button className="activate_btn">ACTIVATE USER</button>
						</div>
					</div>
					<UserInfo userDetails={userDetails} />
				</div>
			</div>
		</div>
	);
};

export default UserDetailsPage;
