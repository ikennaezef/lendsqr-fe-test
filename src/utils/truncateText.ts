export const truncateText = (str: string) => {
	if (str.length > 10) {
		return str.slice(0, 10) + "...";
	} else {
		return str;
	}
};
