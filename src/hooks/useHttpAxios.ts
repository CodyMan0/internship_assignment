import { useEffect, useState } from "react";

const useHttpAxios = (asyncFunc: () => Promise<any>) => {
	const [data, setData] = useState<any>();

	useEffect(() => {
		asyncFunc();
	}, []);
	return { data, setData };
};

export default useHttpAxios;
