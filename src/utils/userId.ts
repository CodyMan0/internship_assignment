function convertUserId(id: number) {
	const formattedDate = id === 1 ? "me" : "counterPart";
	return formattedDate;
}

export { convertUserId };
