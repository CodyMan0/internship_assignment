import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../context/ModalContext";

const useModal = () => {
	const { isOpen, openModal, closeModal } = useContext(ModalContext);
	const outside = useRef<any>(null);

	const handlerOutside = () => {
		closeModal();
	};

	useEffect(() => {
		document.addEventListener("mousedown", handlerOutside);
		return () => {
			document.removeEventListener("mousedown", handlerOutside);
		};
	}, []);

	return { isOpen, outside, openModal, closeModal };
};

export default useModal;
