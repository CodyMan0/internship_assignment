import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";

const UserInput = () => {
	return (
		<form className="w-full flex items-center justify-center bg-beige h-14 px-4 py-2 gap-2">
			<FiPlusCircle className="flex-none text-3xl text-gray" />
			<div className="relative flex-auto w-full flex items-center">
				<label className="sr-only">userInput</label>
				<input className="w-full py-2 px-4 text-sm border-2 rounded-2xl border-beige outline-none placeholder:text-xs " />
				<FiArrowUpCircle className="absolute right-3 text-3xl text-white fill-main" />
			</div>
		</form>
	);
};

export default UserInput;
