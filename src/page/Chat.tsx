import Header from "../components/Header";
import { useMessageService } from "../hooks/useMessage";

const Chat = () => {
	const messageService = useMessageService();

	const test = async () => {
		const data = await messageService.getAllMessage();
		console.log(data);
	};
	test();

	return (
		<div className="bg-background w-full h-full  border-beige border-2 rounded-md">
			<Header name="주선자" />
			<section>매세지</section>
		</div>
	);
};

export default Chat;
