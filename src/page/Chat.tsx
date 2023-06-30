import Header from "../components/Header";
import UserInput from "../components/UserInput";
import { useMessageService } from "../hooks/useMessageService";

import ChatSection from "../components/ChatSection";
import useHttpAxios from "../hooks/useHttpAxios";

const Chat = () => {
	const messageService = useMessageService();
	const { data: messages, setData: setMessages } = useHttpAxios(getMessage);

	async function getMessage() {
		const messageList = await messageService.getAllMessage();
		setMessages(messageList);
	}

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
