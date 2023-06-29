import { useEffect, useState } from "react";
import { useMessageService } from "./useMessageService";
import { MessageInfoType } from "../types/MessageType";

const useMessage = () => {
	const messageService = useMessageService();
	const [messages, setMessages] = useState<MessageInfoType[]>();

	const getMessage = async () => {
		const data = await messageService.getAllMessage();
		setMessages(data);
		return data;
	};

	useEffect(() => {
		getMessage();
	}, []);
	return { messages };
};

export default useMessage;
