import { MessageInfoType } from "../types/MessageType";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | undefined;
};
const ChatSection = ({ messageList }: Props) => {
	return (
		<div className="py-2 px-4">
			{messageList &&
				messageList.map((message, index) => {
					console.log("in map", message);
					return <MessageBox key={index} message={message} />;
				})}
		</div>
	);
};

export default ChatSection;
