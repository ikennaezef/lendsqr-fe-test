import React from "react";
import "./UserInfo.scss";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

export type UserDetailsType = {
	accountBalance?: string;
	accountNumber?: string;
	createdAt?: string;
	education?: {
		duration: string;
		employmentStatus: string;
		level: string;
		loanRepayment: string;
		monthlyIncome: string[];
		officeEmail: string;
		sector: string;
	};
	email?: string;
	guarantor?: {
		address: string;
		firstName: string;
		gender: string;
		lastName: string;
		phoneNumber: string;
	};
	id?: string;
	lastActiveDate?: string;
	orgName?: string;
	phoneNumber?: string;
	profile?: {
		address: string;
		avatar: string;
		bvn: string;
		currency: string;
		firstName: string;
		gender: string;
		lastName: string;
		phoneNumber: string;
	};
	socials?: {
		facebook: string;
		instagram: string;
		twitter: string;
	};
	userName?: string;
};

export type UserDetailProps = {
	userDetails: UserDetailsType | undefined;
};

const UserInfo = ({ userDetails }: UserDetailProps) => {
	return (
		<div className="user_info_container">
			<div className="info_top_card">
				<div className="card_top">
					<div className="profile">
						<img
							src={userDetails?.profile?.avatar}
							alt="user profile"
							className="user_profile_img"
						/>
						<div>
							<h4 className="user_fullName">
								{userDetails?.profile?.firstName}{" "}
								{userDetails?.profile?.lastName}{" "}
							</h4>
							<span className="user_bvn">{userDetails?.profile?.bvn}</span>
						</div>
					</div>
					<div className="divider"></div>
					<div className="user_tier">
						<p>User's Tier</p>
						<div className="stars">
							<IoIosStar />
							<IoIosStar />
							<IoIosStarOutline />
						</div>
					</div>
					<div className="divider"></div>
					<div className="user_balance">
						<h4>
							{userDetails?.profile?.currency} {userDetails?.accountBalance}
						</h4>
						<p>{userDetails?.accountNumber}/Providus Bank</p>
					</div>
				</div>
				<div className="card_tabs">
					<div className="tabs_container">
						<button className="tab_btn active">General Details</button>
						<button className="tab_btn">Documents</button>
						<button className="tab_btn">Bank Details</button>
						<button className="tab_btn">Loans</button>
						<button className="tab_btn">Savings</button>
						<button className="tab_btn">App and System</button>
					</div>
				</div>
			</div>
			<div className="info_bottom_card">
				<div className="info_section">
					<h3 className="info_section_title">Personal Information</h3>
					<div className="info_container">
						<div className="info_group">
							<h4 className="info_title">FULL NAME</h4>
							<p className="info_value">
								{userDetails?.profile?.firstName}{" "}
								{userDetails?.profile?.lastName}{" "}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">FPHONE NUMBER</h4>
							<p className="info_value">{userDetails?.profile?.phoneNumber}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">EMAIL ADDRESS</h4>
							<p className="info_value">{userDetails?.email}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">BVN</h4>
							<p className="info_value">{userDetails?.profile?.bvn}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">GENDER</h4>
							<p className="info_value">{userDetails?.profile?.gender}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">MARITAL STATUS</h4>
							<p className="info_value">Single</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">MONTHLY INCOME</h4>
							<p className="info_value">
								{userDetails?.education?.monthlyIncome[0]} -{" "}
								{userDetails?.education?.monthlyIncome[1]}{" "}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">LOAN REPAYMENT</h4>
							<p className="info_value">
								{userDetails?.education?.loanRepayment}
							</p>
						</div>
					</div>
				</div>
				<div className="info_section">
					<h3 className="info_section_title">Education and Employment</h3>
					<div className="info_container">
						<div className="info_group">
							<h4 className="info_title">LEVEL OF EDUCATION</h4>
							<p className="info_value">{userDetails?.education?.level}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">EMPLOYMENT STATUS</h4>
							<p className="info_value">
								{userDetails?.education?.employmentStatus}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">SECTOR OF EMPLOYMENT</h4>
							<p className="info_value">{userDetails?.education?.sector}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">DURATION OF EMPLOYMENT</h4>
							<p className="info_value">{userDetails?.education?.duration}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">OFFICE EMAIL</h4>
							<p className="info_value">
								{userDetails?.education?.officeEmail}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">MONTHLY INCOME</h4>
							<p className="info_value">
								{userDetails?.education?.monthlyIncome[0]} -{" "}
								{userDetails?.education?.monthlyIncome[1]}{" "}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">LOAN REPAYMENT</h4>
							<p className="info_value">
								{userDetails?.education?.loanRepayment}
							</p>
						</div>
					</div>
				</div>
				<div className="info_section">
					<h3 className="info_section_title">Socials</h3>
					<div className="info_container">
						<div className="info_group">
							<h4 className="info_title">TWITTER</h4>
							<p className="info_value">{userDetails?.socials?.twitter}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">FACEBOOK</h4>
							<p className="info_value">{userDetails?.socials?.facebook}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">INSTAGRAM</h4>
							<p className="info_value">{userDetails?.socials?.instagram}</p>
						</div>
					</div>
				</div>
				<div className="info_section">
					<h3 className="info_section_title">Guarantor</h3>
					<div className="info_container">
						<div className="info_group">
							<h4 className="info_title">FULL NAME</h4>
							<p className="info_value">
								{userDetails?.guarantor?.firstName}{" "}
								{userDetails?.guarantor?.lastName}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">PHONE NUMBER</h4>
							<p className="info_value">
								{userDetails?.guarantor?.phoneNumber}
							</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">EMAIL ADDRESS</h4>
							<p className="info_value">{userDetails?.guarantor?.address}</p>
						</div>
						<div className="info_group">
							<h4 className="info_title">RELATIONSHIP</h4>
							<p className="info_value">Sister</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
