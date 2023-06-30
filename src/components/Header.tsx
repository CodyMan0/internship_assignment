import { FiChevronLeft } from "react-icons/fi";
import CounterpartInfo from "./common/CounterpartInfo";

export type NameAndUrlProps = {
	name: string | undefined;
	url: string | undefined;
};
const Header = ({ name, url }: NameAndUrlProps) => {
	return (
		<nav className=" bg-beige py-2 px-4">
			<div className="flex relative justify-center items-center gap-2">
				<FiChevronLeft className="absolute left-0" />
				<CounterpartInfo name={name} url={url} />
			</div>
		</nav>
	);
};
export default Header;
