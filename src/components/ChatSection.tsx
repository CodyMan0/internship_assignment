import { MessageInfoType } from "../types/MessageType";
import { createNewDateList } from "../utils/formatDate";
import Date from "./common/Date";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | null;
};
const ChatSection = ({ messageList }: Props) => {
	const removeSameDay = createNewDateList(messageList);

	return (
		<section className="py-2 px-4 w-full h-[86%] overflow-y-scroll">
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
		</section>
	);
};

export default ChatSection;
