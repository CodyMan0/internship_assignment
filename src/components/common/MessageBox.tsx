import { MessageInfoType } from "../../types/MessageType";
import { formatDetailTime, formatTime } from "../../utils/formatDate";
import { getStyleDependOnUserId } from "../../utils/styleMessageBox";
import { convertUserId } from "../../utils/userId";

import CounterpartInfo from "./CounterpartInfo";

type Props = {
	message: MessageInfoType;
};

const MessageBox = ({ message }: Props) => {
	const { created_at, id, msg, photo_url, user_id, user_name } = message;
	const backgroundFromUserId = getStyleDependOnUserId(user_id, "background");
	const textColorFromUserId = getStyleDependOnUserId(user_id, "color");
	const sortingFromUserId = getStyleDependOnUserId(user_id, "sorting");

	return (
		<div className="mt-4">
			<div className="flex gap-2 font-normal">
				{convertUserId(user_id) === "counterPart" && (
					<CounterpartInfo name={user_name} />
				)}
			</div>
			<div className={`${sortingFromUserId}`}>
				<div className={`${backgroundFromUserId}`}>
					<p className={`${textColorFromUserId}`}>{msg.content}</p>
				</div>
				<p className="text-[8px] text-gray font-semibold">
					{formatDetailTime(formatTime(created_at))}
				</p>
			</div>
		</div>
	);
};

export default MessageBox;
