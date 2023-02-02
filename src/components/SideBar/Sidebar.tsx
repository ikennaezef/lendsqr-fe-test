import React from "react";
import "./Sidebar.scss";
import { BiChevronDown } from "react-icons/bi";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { businessesLinks, customerLinks, settingsLinks } from "../../constants";

type SideNavProps = {
	navIsOpen?: boolean;
};

const Sidebar = ({ navIsOpen }: SideNavProps) => {
	return (
		<nav
			className={
				navIsOpen ? "sidebar_container mobile_nav_active" : "sidebar_container"
			}>
			<div className="sidebar_inner">
				<button className="nav_link switch_org_link">
					<img src="/images/icon-briefcase.svg" alt="briefcase icon" />
					<span>Switch Organization</span>
					<BiChevronDown color="inherit" />
				</button>
				<button className="nav_link dashboard_link">
					<img src="/images/icon-home.svg" alt="home icon" />
					<span>Dashboard</span>
				</button>
				<div className="links_group">
					<h4 className="links_heading">CUSTOMERS</h4>
					<div className="links_container">
						{customerLinks.map((link) => (
							<NavItem
								key={link.id}
								data={link}
								isActive={link.title === "Users"}
							/>
						))}
					</div>
				</div>
				<div className="links_group">
					<h4 className="links_heading">BUSINESSES</h4>
					<div className="links_container">
						{businessesLinks.map((link) => (
							<NavItem key={link.id} data={link} />
						))}
					</div>
				</div>
				<div className="links_group">
					<h4 className="links_heading">SETTINGS</h4>
					<div className="links_container">
						{settingsLinks.map((link) => (
							<NavItem key={link.id} data={link} />
						))}
					</div>
				</div>
				<div className="side_nav_bottom">
					<Link to="/login" className="nav_link">
						<img
							src={`/images/icon-sign-out.svg`}
							alt="logout icon"
							className="nav_link_icon"
						/>
						<span className="link_text">Logout</span>
					</Link>
					<span className="version_text">v1.2.0</span>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
