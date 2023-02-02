import React from "react";
import { FilterParamsType } from "../../types";
import "./FilterBox.scss";

type FilterBoxProps = {
	onChangeFilterParam: (filterValue: string, param: string) => void;
	onFilter: () => void;
	onReset: () => void;
	inputValues: FilterParamsType;
};

const FilterBox = ({
	onChangeFilterParam,
	onFilter,
	onReset,
	inputValues,
}: FilterBoxProps) => {
	return (
		<div className="filterBox_container">
			<div className="filterBox_inner">
				<div className="fields_container">
					<div className="filter_group">
						<label htmlFor="org">Organization</label>
						<select
							name="org"
							id="org_select"
							value={inputValues.org}
							onChange={(e) => onChangeFilterParam(e.target.value, "org")}>
							<option value="org_1">Organization 1</option>
							<option value="org_2">Organization 2</option>
						</select>
					</div>
					<div className="filter_group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							value={inputValues.username}
							onChange={(e) => onChangeFilterParam(e.target.value, "username")}
							placeholder="User"
							className="filter_input_field"
						/>
					</div>
					<div className="filter_group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={inputValues.email}
							onChange={(e) => onChangeFilterParam(e.target.value, "email")}
							placeholder="Email"
							className="filter_input_field"
						/>
					</div>
					<div className="filter_group">
						<label htmlFor="date">Date</label>
						<input
							type="date"
							name="date"
							value={inputValues.date}
							onChange={(e) => onChangeFilterParam(e.target.value, "date")}
							placeholder="Date"
							className="filter_input_field"
						/>
					</div>
					<div className="filter_group">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="text"
							name="phone"
							value={inputValues.phoneNumber}
							onChange={(e) =>
								onChangeFilterParam(e.target.value, "phoneNumber")
							}
							placeholder="Phone Number"
							className="filter_input_field"
						/>
					</div>
					<div className="filter_group">
						<label htmlFor="status">Status</label>
						<select
							name="status"
							id="status_select"
							value={inputValues.status}
							onChange={(e) => onChangeFilterParam(e.target.value, "status")}>
							<option value="Inactive">Inactive</option>
							<option value="Pending">Pending</option>
						</select>
					</div>
				</div>
				<div className="buttons_container">
					<button className="reset_btn" onClick={onReset}>
						Reset
					</button>
					<button className="filter_btn" onClick={onFilter}>
						Filter
					</button>
				</div>
			</div>
		</div>
	);
};

export default FilterBox;
