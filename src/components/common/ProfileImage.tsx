import counterPartImg from "../../assets/bridge.png";

type Props = {
	url: string;
};

const ProfileImage = ({ url }: Props) => {
	return (
		<div className="w-8 h-8 flex items-center">
			<img
				src={counterPartImg}
				alt="상대방이미지"
				className="max-w-full h-auto object-cover rounded-[50%]"
			/>
		</div>
	);
};

export default ProfileImage;
