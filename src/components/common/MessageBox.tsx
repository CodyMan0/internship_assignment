import { MessageInfoType } from "../../types/MessageType";
import { formatDetailTime, formatTime } from "../../utils/formatDate";

import CounterpartInfo from "./CounterpartInfo";

type Props = {
	message: MessageInfoType;
};

const MessageBox = ({ message }: Props) => {
	const { created_at, id, msg, photo_url, user_id, user_name } = message;
	console.log(created_at);

	return (
		<div className="mt-4">
			<div className="flex gap-2 font-normal">
				<CounterpartInfo name={user_name} />
			</div>
			<div className="flex items-end gap-1">
				<div className="p-2 bg-white inline-block max-w-[230px] rounded-xl border-2 border-beige ml-10">
					<p className="text-sm leading-relaxed">{msg.content}</p>
				</div>
				<p className="text-[8px] text-gray font-semibold">
					{formatDetailTime(formatTime(created_at))}
				</p>
			</div>
		</div>
	);
};

export default MessageBox;
