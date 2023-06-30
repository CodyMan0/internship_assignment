import Header from "../components/Header";
import UserInput from "../components/UserInput";
import { useMessageService } from "../hooks/useMessageService";
import ChatSection from "../components/ChatSection";
import useHttpAxios from "../hooks/useHttpAxios";
import { sortedMessageOnTimesAndId } from "../utils/sortMessage";
import ModalImage from "../components/common/ModalImage";
import useModal from "../hooks/useModal";

const Chat = () => {
	const messageService = useMessageService();
	const { isOpen } = useModal();
	const {
		data: messages,
		setData: setMessages,
		userNameFromMsgs,
	} = useHttpAxios(getMessage);

	async function getMessage() {
		const messageList = await messageService.getAllMessage();
		setMessages(messageList);
	}

	const sortedMessages = sortedMessageOnTimesAndId(messages);

	return (
		<div className="bg-background w-full h-full border-beige border-2 rounded-md relative">
			{isOpen && (
				<div className="absolute inset-0 bg-opacity-50 bg-black z-10"></div>
			)}
			{messages && (
				<Header
					name={userNameFromMsgs?.user_name}
					url={userNameFromMsgs?.photo_url}
				/>
			)}
			<ChatSection messageList={sortedMessages} />
			{isOpen && <ModalImage url={userNameFromMsgs?.photo_url} />}
			<UserInput />
		</div>
	);
};

export default Chat;
