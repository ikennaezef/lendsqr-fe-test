import React from "react";
import { RouteType } from "../SideBar/Sidebar";
import "./NavItem.scss";

type NavItemProps = {
	isActive?: boolean;
	data: RouteType;
};

const NavItem = ({ isActive, data }: NavItemProps) => {
	return (
		<a href="#" className={`nav_link ${isActive && "active_link"}`}>
			<img
				src={`/images/${data.icon}`}
				alt={data.title}
				className="nav_link_icon"
			/>
			<span className="link_text">{data.title}</span>
		</a>
	);
};

export default NavItem;
