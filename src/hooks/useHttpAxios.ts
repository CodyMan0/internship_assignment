import { useEffect, useState } from "react";
import { MessageInfoType } from "../types/MessageType";

const useHttpAxios = (asyncFunc: () => Promise<any>) => {
	const [data, setData] = useState<MessageInfoType[]>();

	const userNameAndPhotoFromMsgs = data?.find(
		(obj: MessageInfoType) => obj.user_id === 2
	);

	useEffect(() => {
		asyncFunc();
	}, []);
	return { data, setData, userNameAndPhotoFromMsgs };
};

export default useHttpAxios;
