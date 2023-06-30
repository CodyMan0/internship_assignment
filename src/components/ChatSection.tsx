import { MessageInfoType } from "../types/MessageType";
import { createNewDateList } from "../utils/formatDate";
import Date from "./common/Date";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | null;
	chatRef: React.RefObject<HTMLDivElement>;
};
const ChatSection = ({ messageList, chatRef }: Props) => {
	const removeSameDay = createNewDateList(messageList);

	return (
		<div className="py-2 px-4 w-full h-[86%] overflow-y-auto" ref={chatRef}>
			{messageList &&
				messageList.map((message, index) => {
					if (message.msg.mtype === "photo") {
						return null;
					}
					const firstDate = removeSameDay?.[index];
					return (
						<div key={index}>
							{!!firstDate && <Date createDate={firstDate} />}
							<MessageBox message={message} />
						</div>
					);
				})}
		</div>
	);
};

export default ChatSection;
