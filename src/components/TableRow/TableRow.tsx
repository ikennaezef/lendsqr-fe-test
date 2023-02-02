import React, { useState } from "react";
import "./TableRow.scss";
import { RxDotsVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TableRowType } from "../../types";
import { formatDate, truncateText } from "../../utils";

type RowProps = {
	rowData: TableRowType;
};

type OptionsProps = {
	userId: string;
};

const Options = ({ userId }: OptionsProps) => {
	return (
		<div className="options_container">
			<Link to={`/userdetails/${userId}`}>
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
				<span>{formatDate(rowData.date)}</span>
			</td>
			<td>
				<span className={`status status_${rowData.status}`}>
					{rowData.status}
				</span>
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
