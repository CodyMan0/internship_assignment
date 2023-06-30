import { MessageInfoType } from "../types/MessageType";

function formatDate(date: string) {
	const targetDate = new Date(date);
	const year = targetDate.getFullYear();
	const month = targetDate.getMonth() + 1;
	const day = targetDate.getDate();
	const formattedDate = `${year}년 ${month}월${day}일`;
	return formattedDate;
}

function createNewDateList(messageList: MessageInfoType[] | null) {
	const test = messageList?.map((message, index) => {
		if (
			index > 0 &&
			formatDate(messageList[index - 1].created_at) ===
				formatDate(message.created_at)
		) {
			return null;
		} else {
			return formatDate(message.created_at);
		}
	});
	return test;
}

function formatTime(date: string) {
	const targetDate = new Date(date);
	const hours = targetDate.getHours();
	const getTimeFromHours = hours >= 12 ? "오후" : "오전";
	const minutes = targetDate.getMinutes();
	const formattedDate = `${getTimeFromHours} ${hours} ${minutes}`;
	return formattedDate;
}

// 임시변수를 삭제해야한다. 리팩토링 우선 순위 2
function formatDetailTime(date: string) {
	const parts = date.split(" ");
	const timePeriod = parts[0]; // '오후'
	let hour = Number(parts[1]); // '13'
	if (hour >= 13) {
		hour -= 12;
	}

	let minute = Number(parts[2]); // '0'
	if (minute == 0) minute = 0;
	const isOnesPlace = minute % 10 === minute;

	const formattedDate = `${timePeriod} ${hour}:${
		isOnesPlace ? `0${minute}` : minute
	}`;
	return formattedDate;
}
export { formatDate, formatTime, formatDetailTime, createNewDateList };
