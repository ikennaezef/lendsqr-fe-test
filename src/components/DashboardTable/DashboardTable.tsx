import React, { useEffect, useState } from "react";
import "./DashboardTable.scss";
import { BiFilter, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import TableRow from "../TableRow/TableRow";
import ReactPaginate from "react-paginate";
import FilterBox from "../FilterBox/FilterBox";
import { FilterParamsType, UserDetailsType } from "../../types";

type TableProps = {
	users: UserDetailsType[];
	error: string | null;
};

const DashboardTable = ({ users, error }: TableProps) => {
	const [filterParameters, setFilterParameters] = useState<FilterParamsType>({
		org: "",
		email: "",
		username: "",
		date: "",
		phoneNumber: "",
		status: "Inactive",
	});
	const [showFilter, setShowFilter] = useState<boolean>(false);
	const [filteredUsers, setFilteredUsers] = useState<UserDetailsType[] | null>(
		null
	);
	const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
	const [usersOnCurrentPage, setUsersOnCurrentPage] = useState<
		UserDetailsType[]
	>([]);
	const usersPerPage = 10;
	const [totalPages, setTotalPages] = useState<number>(1);

	const changePage = ({ selected }: any) => {
		setCurrentPageNumber(selected);
	};

	const editFilterParams = (filterValue: string, param: string) => {
		setFilterParameters({
			...filterParameters,
			[param]: filterValue,
		});
	};

	const filterHandler = () => {
		const usersAfterFilter = users?.filter(
			(user) =>
				user.orgName?.indexOf(filterParameters.org) > -1 &&
				user.email?.indexOf(filterParameters.email) > -1 &&
				user.userName?.indexOf(filterParameters.username) > -1 &&
				user.phoneNumber?.indexOf(filterParameters.phoneNumber) > -1
		);
		setFilteredUsers(usersAfterFilter);
		setShowFilter(false);
	};

	const resetHandler = () => {
		setFilterParameters({
			org: "",
			email: "",
			username: "",
			date: "",
			phoneNumber: "",
			status: "Inactive",
		});
		setFilteredUsers(null);
		setShowFilter(false);
	};

	useEffect(() => {
		const lowerLimit = (currentPageNumber - 1) * usersPerPage;
		const upperLimit = lowerLimit + usersPerPage;
		const currentUsersList = filteredUsers
			? filteredUsers.slice(lowerLimit, upperLimit)
			: users.slice(lowerLimit, upperLimit);
		setUsersOnCurrentPage(currentUsersList);
		window.scroll(0, 0);
	}, [users, filteredUsers, currentPageNumber]);

	useEffect(() => {
		setTotalPages(Math.ceil(users.length / usersPerPage));
		if (filteredUsers) {
			setTotalPages(Math.ceil(filteredUsers.length / usersPerPage));
		}
	}, [filteredUsers, users]);

	if (error) {
		return (
			<div className="error_container">
				<span>An error occured, Please try again.</span>
			</div>
		);
	}

	const toggleFilter = () => {
		setShowFilter((showingFilter) => !showingFilter);
	};

	return (
		<div className="wrapper">
			<div className="table_container">
				{showFilter && (
					<FilterBox
						onChangeFilterParam={editFilterParams}
						onFilter={filterHandler}
						onReset={resetHandler}
						inputValues={filterParameters}
					/>
				)}
				<table className="table_main">
					<thead>
						<tr className="table_headings">
							<th>
								<span>
									ORGANIZATION{" "}
									<button className="filter_btn" onClick={toggleFilter}>
										<BiFilter />
									</button>
								</span>
							</th>
							<th>
								<span>
									USERNAME <BiFilter />
								</span>
							</th>
							<th>
								<span>
									EMAIL <BiFilter />
								</span>
							</th>
							<th>
								<span>
									PHONE NUMBER <BiFilter />
								</span>
							</th>
							<th>
								<span>
									DATE JOINED <BiFilter />
								</span>
							</th>
							<th>
								<span>
									STATUS <BiFilter />
								</span>
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{usersOnCurrentPage.map((user, index) => {
							let status = "Inactive";
							if (index % 2 === 0) {
								status = "Pending";
							} else if (index % 3 === 0) {
								status = "Blacklisted";
							}
							const userData = {
								id: user.id,
								org: user.orgName,
								username: user.userName,
								email: user.email,
								phone: user.phoneNumber,
								date: user.createdAt,
								status: status,
							};
							return <TableRow key={user.id} rowData={userData} />;
						})}
					</tbody>
				</table>
				{filteredUsers && filteredUsers.length < 1 && (
					<div className="not_found_container">
						<p>Sorry, there were no results with those filters.</p>
					</div>
				)}
			</div>
			<div className="table_bottom">
				<div className="showing_info">
					<span>Showing</span>
					<select name="" id="items_showing">
						<option value="100">100</option>
						<option value="50">50</option>
					</select>
					<span>out of 100</span>
				</div>
				<div className="pagination_container">
					<ReactPaginate
						previousLabel={<BiChevronLeft />}
						nextLabel={<BiChevronRight />}
						pageCount={totalPages}
						onPageChange={changePage}
						containerClassName={"paginationBtns"}
						previousLinkClassName={"prevBtn"}
						nextLinkClassName={"nextBtn"}
						disabledClassName={"paginationDisabled"}
						activeLinkClassName={"paginationActive"}
						pageLinkClassName={"paginationLink"}
						breakLinkClassName={"paginationBreak"}
					/>
				</div>
			</div>
		</div>
	);
};

export default DashboardTable;
