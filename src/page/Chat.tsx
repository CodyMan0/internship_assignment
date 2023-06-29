import ChatSection from "../components/ChatSection";
import Header from "../components/Header";
import UserInput from "../components/UserInput";
import useMessage from "../hooks/useMessage";

const Chat = () => {
	const { messages } = useMessage();
	console.log("최상위", messages);
	// overflow-y: hidden;
	// overflow: scroll;
	return (
		<div className="bg-background w-full h-full border-beige border-2 rounded-md ">
			<Header />
			<ChatSection messageList={messages} />
			<UserInput />
		</div>
	);
};

export default Chat;
