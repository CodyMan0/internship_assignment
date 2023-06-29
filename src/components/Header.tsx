// 조건
// 1. 헤더의 back 아이콘 check
// 2. user_input 전송 버튼의 아이콘은 머터리얼 아이콘을 사용 (chevron_left, arrow_back)
import { FiChevronLeft } from "react-icons/fi";
import ProfileImage from "./ProfileImage";

type Props = {
	name: string;
};

const Header = ({ name }: Props) => {
	return (
		<nav className="w-full bg-beige py-2 px-4">
			<div className="flex relative justify-center items-center gap-2">
				<FiChevronLeft className="absolute left-0" />
				<ProfileImage url="UI" />
				<h1 className="font-semibold">{name}</h1>
			</div>
		</nav>
	);
};
export default Header;
