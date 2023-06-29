import { MessageInfoType } from "../types/MessageType";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | undefined;
};
const ChatSection = ({ messageList }: Props) => {
	return (
		<div className="py-2 px-4 w-full h-[80%] overflow-y-scroll">
			{messageList &&
				messageList.map((message, index) => {
					if (message.msg.mtype === "photo") {
						return null;
					}
					console.log("in map", message);
					return <MessageBox key={index} message={message} />;
				})}
		</div>
	);
};

export default ChatSection;
