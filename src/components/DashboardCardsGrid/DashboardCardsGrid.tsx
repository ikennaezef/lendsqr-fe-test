import React from "react";
import { CardProps } from "../../types";
import DashboardDataCard from "../DashboardDataCard/DashboardDataCard";
import "./DashboardCardsGrid.scss";

const cards: CardProps[] = [
	{ id: 1, title: "USERS", icon: "users.svg", digit: "2,453" },
	{ id: 2, title: "ACTIVE USERS", icon: "active-users.svg", digit: "2,453" },
	{
		id: 3,
		title: "USERS WITH LOANS",
		icon: "users-with-loans.svg",
		digit: "12,453",
	},
	{
		id: 4,
		title: "USERS WITH SAVINGS",
		icon: "users-with-savings.svg",
		digit: "102,453",
	},
];

const DashboardCardsGrid = () => {
	return (
		<div className="cards_grid">
			{cards.map((card) => (
				<DashboardDataCard key={card.id} data={card} />
			))}
		</div>
	);
};

export default DashboardCardsGrid;
