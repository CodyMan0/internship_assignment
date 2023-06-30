import useModal from "../../hooks/useModal";

type Props = {
	url: string | undefined;
};

const ProfileImage = ({ url }: Props) => {
	const { isOpen, openModal } = useModal();

	return (
		<div className="w-8 h-8 flex items-center">
			<img
				src={url}
				alt="상대방이미지"
				className="max-w-full h-auto object-cover rounded-[50%] cursor-pointer"
				onClick={openModal}
			/>
		</div>
	);
};

export default ProfileImage;
