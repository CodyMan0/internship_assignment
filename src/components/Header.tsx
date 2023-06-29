import { FiChevronLeft } from "react-icons/fi";
import CounterpartInfo from "./common/CounterpartInfo";

const Header = () => {
	return (
		<nav className="w-full bg-beige py-2 px-4">
			<div className="flex relative justify-center items-center gap-2">
				<FiChevronLeft className="absolute left-0" />
				<CounterpartInfo name="dfdf" />
			</div>
		</nav>
	);
};
export default Header;
