import { useState } from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";
import { MessageInfoType } from "../types/MessageType";

type Props = {
	setMessages: React.Dispatch<
		React.SetStateAction<MessageInfoType[] | undefined>
	>;
	chatRef: React.RefObject<any>;
};

const UserInput = ({ setMessages, chatRef }: Props) => {
	const [userInputValue, setUserInputValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const present = new Date();

		setMessages((prev: any) => [
			//unCompleted typeError 1
			...prev,
			{
				created_at: `${present.toString()}`,
				id: 140,
				msg: {
					mtype: "text",
					content: `${userInputValue}`,
				},
				photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
				user_id: 1,
				user_name: "소개팅남",
			},
		]);
		scrollYToBtm();
		setUserInputValue("");
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		setUserInputValue(value);
	};

	const scrollYToBtm = () => {
		const scrollHeight = chatRef?.current?.scrollHeight;
		// unCompleted typeError 2
		chatRef.current.scrollTop = scrollHeight;
	};

	return (
		<form
			className="w-full flex items-center justify-center bg-beige h-14 px-4 py-2 gap-2"
			action="submit"
			onSubmit={handleSubmit}
			onClick={scrollYToBtm}
		>
			<FiPlusCircle className="flex-none text-3xl text-gray" />
			<div className="relative flex-auto w-full flex items-center">
				<label className="sr-only">userInput</label>
				<input
					name="user"
					value={userInputValue}
					placeholder="메세지를 입력해주세요"
					className="w-full py-2 px-4 text-sm border-2 rounded-2xl border-beige outline-none placeholder:text-xs "
					onChange={handleChange}
					autoComplete="on"
				/>
				{!!userInputValue && (
					<button type="submit">
						<FiArrowUpCircle className="absolute top-1 right-3  text-3xl text-white fill-main" />
					</button>
				)}
			</div>
		</form>
	);
};

export default UserInput;
