import useModal from "../../hooks/useModal";
import ProfileImage from "./ProfileImage";
type Props = {
	name: string | undefined;
	url: string | undefined;
};

const CounterpartInfo = ({ name, url }: Props) => {
	return (
		<>
			<ProfileImage url={url} />
			<h1 className="font-semibold">{name}</h1>
		</>
	);
};

export default CounterpartInfo;
