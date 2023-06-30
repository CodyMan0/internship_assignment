import { useEffect, useState } from "react";
import ChatSection from "../components/ChatSection";
import Header from "../components/Header";
import UserInput from "../components/UserInput";
import { useMessageService } from "../hooks/useMessageService";
import { MessageInfoType } from "../types/MessageType";

const Chat = () => {
	const messageService = useMessageService();
	const [messages, setMessages] = useState<MessageInfoType[]>();

	const getMessage = async () => {
		const messageList = await messageService.getAllMessage();
		setMessages(messageList);
	};

	useEffect(() => {
		getMessage();
	}, []);

	console.log("chat", messages);

	return (
		<div className="bg-background w-full h-full border-beige border-2 rounded-md ">
			<Header />
			<ChatSection messageList={messages} />
			<UserInput />
		</div>
	);
};

export default Chat;
