export type CardProps = {
	id: number;
	title: string;
	icon: string;
	digit: string;
};

export type RouteType = {
	id: number;
	title: string;
	icon: string;
};

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
