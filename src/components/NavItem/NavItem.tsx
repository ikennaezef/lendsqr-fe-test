import React from "react";
import { RouteType } from "../../types";
import "./NavItem.scss";

type NavItemProps = {
	isActive?: boolean;
	data: RouteType;
};

const NavItem = ({ isActive, data }: NavItemProps) => {
	return (
		<button className={`nav_link ${isActive && "active_link"}`}>
			<img
				src={`/images/${data.icon}`}
				alt={data.title}
				className="nav_link_icon"
			/>
			<span className="link_text">{data.title}</span>
		</button>
	);
};

export default NavItem;
