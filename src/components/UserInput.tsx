import { useEffect, useState } from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";
import { MessageInfoType } from "../types/MessageType";

type Props = {
	setMessages: React.Dispatch<
		React.SetStateAction<MessageInfoType[] | undefined>
	>;
	chatRef: React.RefObject<HTMLDivElement>;
};

const UserInput = ({ setMessages, chatRef }: Props) => {
	const [userInputValue, setUserInputValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const present = new Date();

		setMessages((prev) => [
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
		console.log("onchage", value);
		setUserInputValue(value);
	};

	const scrollYToBtm = () => {
		const currentRef = chatRef?.current;
		const scrollHeight = chatRef?.current?.scrollHeight;
		if (currentRef !== undefined) {
			chatRef.current.scrollTop = scrollHeight;
		}
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
					<FiArrowUpCircle className="absolute right-3 text-3xl text-white fill-main" />
				)}
			</div>
		</form>
	);
};

export default UserInput;
