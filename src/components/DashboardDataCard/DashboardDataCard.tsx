import React from "react";
import { CardProps } from "../../types";
import "./DashboardDataCard.scss";

type Props = {
	data: CardProps;
};

const DashboardDataCard = ({ data }: Props) => {
	return (
		<div className="dataCard_container">
			<div className="card_inner">
				<img
					src={`/images/${data.icon}`}
					alt="users icon"
					className="card_icon"
				/>
				<h5 className="data_title">{data.title}</h5>
				<h2 className="data_digit">{data.digit}</h2>
			</div>
		</div>
	);
};

export default DashboardDataCard;
