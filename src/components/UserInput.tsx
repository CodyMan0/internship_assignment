import { useState } from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";

const UserInput = () => {
	const [userInputValue, setUserInputValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUserInputValue("");
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		console.log("onchage", value);
		setUserInputValue(value);
	};

	return (
		<form
			className="w-full flex items-center justify-center bg-beige h-14 px-4 py-2 gap-2"
			action="submit"
			onSubmit={handleSubmit}
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
