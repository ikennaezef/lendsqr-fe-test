import React from "react";
import "./TopNav.scss";
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

type TopNavProps = {
	toggleNav?: () => void;
};

const TopNav = ({ toggleNav }: TopNavProps) => {
	return (
		<div className="topNav_container">
			<div className="topNav_inner">
				<div className="logo_container">
					<img src="/images/logo.svg" alt="lendsqr logo" className="logo" />
				</div>
				<div className="search_container">
					<input type="text" placeholder="Search for anything" />
					<button className="search_btn">
						<MdSearch color="inherit" />
					</button>
				</div>
				<div className="topNav_right">
					<button className="docs_link">Docs</button>
					<button className="notification_btn">
						<MdNotificationsNone color="inherit" />
					</button>
					<div className="user_profile">
						<img
							src="/images/user-image.png"
							className="profile_image"
							alt="user profile"
						/>
						<div className="name_container">
							<span className="user_name">Adedeji</span>
							<FaCaretDown color="inherit" />
						</div>
					</div>
				</div>
				<button className="nav_toggle_btn" onClick={toggleNav}>
					<HiBars3 />
				</button>
			</div>
		</div>
	);
};

export default TopNav;
