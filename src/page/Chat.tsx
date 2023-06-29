import ChatSection from "../components/ChatSection";
import Header from "../components/Header";
import useMessage from "../hooks/useMessage";

const Chat = () => {
	const { messages } = useMessage();
	console.log("최상위", messages);
	return (
		<div className="bg-background w-full h-full  border-beige border-2 rounded-md">
			<Header />
			<ChatSection messageList={messages} />
			<section>매세지</section>
		</div>
	);
};

export default Chat;
