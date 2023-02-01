import React, { useEffect, useState } from "react";
import "./DashboardTable.scss";
import { BiFilter, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import TableRow from "../TableRow/TableRow";
import ReactPaginate from "react-paginate";

type TableProps = {
	users: any[];
	error: string | null;
};

const DashboardTable = ({ users, error }: TableProps) => {
	const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
	const [usersOnCurrentPage, setUsersOnCurrentPage] = useState<any[]>([]);
	const usersPerPage = 10;
	const totalPages = Math.ceil(users.length / usersPerPage);

	const changePage = ({ selected }: any) => {
		setCurrentPageNumber(selected);
	};

	useEffect(() => {
		const lowerLimit = (currentPageNumber - 1) * usersPerPage;
		const upperLimit = lowerLimit + usersPerPage;
		const currentUsersList = users.slice(lowerLimit, upperLimit);
		setUsersOnCurrentPage(currentUsersList);
		window.scroll(0, 0);
	}, [users, currentPageNumber]);

	if (error) {
		return (
			<div className="error_container">
				<span>An error occured, Please try again.</span>
			</div>
		);
	}

	return (
		<div className="wrapper">
			<div className="table_container">
				<table className="table_main">
					<thead>
						<tr className="table_headings">
							<th>
								<span>
									ORGANIZATION <BiFilter />
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
						{usersOnCurrentPage.map((user) => {
							const userData = {
								id: user.id,
								org: user.orgName,
								username: user.userName,
								email: user.email,
								phone: user.phoneNumber,
								date: user.createdAt,
							};
							return <TableRow key={user.id} rowData={userData} />;
						})}
					</tbody>
				</table>
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
