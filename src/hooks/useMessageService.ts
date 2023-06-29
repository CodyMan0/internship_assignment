import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export const useMessageService = () => {
	const messageService = useContext(MessageContext);
	if (!messageService) {
		throw new Error("Can't find targetProvider");
	}
	return messageService;
};
