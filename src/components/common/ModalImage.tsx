import useModal from "../../hooks/useModal";

type Props = {
	url: string | undefined;
};

const ModalImage = ({ url }: Props) => {
	const { outside, closeModal } = useModal();
	return (
		<div className="absolute z-30 top-1/4" ref={outside}>
			<img src={url} alt="image_of_counterpart" onClick={closeModal} />
		</div>
	);
};

export default ModalImage;
