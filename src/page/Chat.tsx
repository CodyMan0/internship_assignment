import { useRef } from "react";
import useModal from "../hooks/useModal";
import useHttpAxios from "../hooks/useHttpAxios";
import UserInput from "../components/UserInput";
import Header from "../components/Header";
import { useMessageService } from "../hooks/useMessageService";
import ChatSection from "../components/ChatSection";
import { sortedMessageOnTimesAndId } from "../utils/sortMessage";
import ModalImage from "../components/common/ModalImage";

const Chat = () => {
	const messageService = useMessageService();
	const { isOpen } = useModal();
	const chatRef = useRef(null);
	const {
		data: messages,
		setData: setMessages,
		userNameAndPhotoFromMsgs,
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
					name={userNameAndPhotoFromMsgs?.user_name}
					url={userNameAndPhotoFromMsgs?.photo_url}
				/>
			)}
			<ChatSection messageList={sortedMessages} chatRef={chatRef} />
			{isOpen && <ModalImage url={userNameAndPhotoFromMsgs?.photo_url} />}
			<UserInput setMessages={setMessages} chatRef={chatRef} />
		</div>
	);
};

export default Chat;
