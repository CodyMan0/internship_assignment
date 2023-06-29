import ProfileImage from "./ProfileImage";

type Props = {
	name: string;
};

const CounterpartInfo = ({ name }: Props) => {
	return (
		<>
			<ProfileImage url="UI" />
			<h1 className="font-semibold">{name}</h1>
		</>
	);
};

export default CounterpartInfo;
