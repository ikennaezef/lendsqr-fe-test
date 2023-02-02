export const formatDate = (date: string) => {
	const dateValue = new Date(date);
	const formattedDate = dateValue.toDateString();
	return formattedDate;
};
