import Header from "../components/Header";
import useMessage from "../hooks/useMessage";

const Chat = () => {
	const { messages } = useMessage();
	console.log(messages);
	return (
		<div className="bg-background w-full h-full  border-beige border-2 rounded-md">
			<Header name="주선자" />
			<section>매세지</section>
		</div>
	);
};

export default Chat;
