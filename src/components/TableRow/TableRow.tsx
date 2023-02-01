import React, { useState } from "react";
import "./TableRow.scss";
import { RxDotsVertical } from "react-icons/rx";
import { Link } from "react-router-dom";

type RowProps = {
	rowData: {
		id: string;
		org: string;
		username: string;
		email: string;
		phone: string;
		date: string;
	};
};

type OptionsProps = {
	userId: string;
};

const Options = ({ userId }: OptionsProps) => {
	return (
		<div className="options_container">
			<Link to={`/user/${userId}`}>
				<div className="option">
					<img src="/images/icon-eye.svg" alt="eye icon" />
					<span>View Details</span>
				</div>
			</Link>
			<div className="option">
				<img src="/images/icon-blacklist-user.svg" alt="blacklist user icon" />
				<span>Blacklist User</span>
			</div>
			<div className="option">
				<img src="/images/icon-activate-user.svg" alt="activate user icon" />
				<span>Activate User</span>
			</div>
		</div>
	);
};

const TableRow = ({ rowData }: RowProps) => {
	const [showOptions, setShowOptions] = useState<boolean>(false);

	const toggleOptions = () => {
		setShowOptions((options) => !options);
	};

	const truncateText = (str: string) => {
		if (str.length > 10) {
			return str.slice(0, 10) + "...";
		} else {
			return str;
		}
	};

	return (
		<tr className="table_row">
			<td>
				<span>{truncateText(rowData?.org)}</span>
			</td>
			<td>
				<span>{truncateText(rowData?.username)}</span>
			</td>
			<td>
				<span>{truncateText(rowData?.email)}</span>
			</td>
			<td>
				<span>{truncateText(rowData?.phone)}</span>
			</td>
			<td>
				<span>May 15, 2020 10:00 AM</span>
			</td>
			<td>
				<span>Inactive</span>
			</td>
			<td className="button_cell">
				{showOptions && <Options userId={rowData?.id} />}
				<button className="options_btn" onClick={toggleOptions}>
					<RxDotsVertical />
				</button>
			</td>
		</tr>
	);
};

export default TableRow;