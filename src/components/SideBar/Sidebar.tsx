import React from "react";
import "./Sidebar.scss";
import { BiChevronDown } from "react-icons/bi";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { RouteType } from "../../types";

const customerLinks: RouteType[] = [
	{ id: 1, title: "Users", icon: "icon-users.svg" },
	{ id: 2, title: "Guarantors", icon: "icon-user-friends.svg" },
	{ id: 3, title: "Loans", icon: "icon-sack.svg" },
	{ id: 4, title: "Decision Models", icon: "icon-handshake.svg" },
	{ id: 5, title: "Savings", icon: "icon-piggy-bank.svg" },
	{ id: 6, title: "Loan Requests", icon: "icon-hand-with-sack.svg" },
	{ id: 7, title: "Whitelist", icon: "icon-user-check.svg" },
	{ id: 8, title: "Karma", icon: "icon-user-times.svg" },
];

const businessesLinks: RouteType[] = [
	{ id: 1, title: "Organization", icon: "icon-briefcase.svg" },
	{ id: 2, title: "Loan Products", icon: "icon-hand-with-sack.svg" },
	{ id: 3, title: "Savings Products", icon: "icon-bank.svg" },
	{ id: 4, title: "Fees and Charges", icon: "icon-coins.svg" },
	{ id: 5, title: "Transactions", icon: "icon.svg" },
	{ id: 6, title: "Services", icon: "icon-galaxy.svg" },
	{ id: 7, title: "Service Account", icon: "icon-user-cog.svg" },
	{ id: 8, title: "Settlements", icon: "icon-scroll.svg" },
	{ id: 9, title: "Reports", icon: "icon-bar-chart.svg" },
];

const settingsLinks: RouteType[] = [
	{ id: 1, title: "Preferences", icon: "icon-sliders.svg" },
	{ id: 2, title: "Fees and Pricing", icon: "icon-badge-percent.svg" },
	{ id: 3, title: "Audit Logs", icon: "icon-clipboard.svg" },
];

const logoutLink: RouteType = {
	id: 1,
	title: "Logout",
	icon: "icon-sign-out.svg",
};

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
				<a href="#" className="nav_link switch_org_link">
					<img src="/images/icon-briefcase.svg" alt="briefcase icon" />
					<span>Switch Organization</span>
					<BiChevronDown color="inherit" />
				</a>
				<a href="#" className="nav_link dashboard_link">
					<img src="/images/icon-home.svg" alt="home icon" />
					<span>Dashboard</span>
				</a>
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
