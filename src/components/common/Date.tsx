type Props = {
	createDate: string;
};

const Date = ({ createDate }: Props) => {
	console;
	return (
		<div className="py-2 flex justify-center ">
			<div className="text-[6px] text-white font-semibold p-1 bg-lightGray rounded-lg ">
				{createDate}
			</div>
		</div>
	);
};

export default Date;
