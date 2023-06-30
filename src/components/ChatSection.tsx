import { MessageInfoType } from "../types/MessageType";
import { formatDate } from "../utils/formatDate";
import Date from "./common/Date";
import MessageBox from "./common/MessageBox";

type Props = {
	messageList: MessageInfoType[] | null;
};
const ChatSection = ({ messageList }: Props) => {
	const createdDates: (string | null)[] | undefined = messageList?.map(
		(message, index) => {
			if (
				index > 0 &&
				formatDate(messageList[index - 1].created_at) ===
					formatDate(message.created_at)
			) {
				return null;
			} else {
				return formatDate(message.created_at);
			}
		}
	);

	console.log(createdDates);

	return (
		<section className="py-2 px-4 w-full h-[86%] overflow-y-scroll">
			{messageList &&
				messageList.map((message, index) => {
					if (message.msg.mtype === "photo") {
						return null;
					}
					const firstDate = createdDates?.[index];
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
