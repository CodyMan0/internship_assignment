import { MessageInfoType } from "../types/MessageType";

export const sortedMessageOnTimesAndId = (messages: MessageInfoType[]) => {
	if (messages) {
		return messages.sort((a, b) => {
			const prevDate = +new Date(a.created_at);
			const nextDate = +new Date(b.created_at);

			if (prevDate < nextDate) {
				return -1;
			} else if (prevDate > nextDate) {
				return 1;
			} else {
				if (a.id < b.id) {
					return -1;
				} else if (a.id > b.id) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	}
	return null;
};
