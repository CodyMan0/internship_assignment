import { MessageInfoType } from "../types/MessageType";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | undefined;
};
const ChatSection = ({ messageList }: Props) => {
	return (
		<section className="py-2 px-4 w-full h-[86%] overflow-y-scroll">
			{messageList &&
				messageList.map((message, index) => {
					if (message.msg.mtype === "photo") {
						return null;
					}
					console.log("in map", message);
					return <MessageBox key={index} message={message} />;
				})}
		</section>
	);
};

export default ChatSection;
