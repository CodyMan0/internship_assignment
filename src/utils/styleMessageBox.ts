import { convertUserId } from "./userId";

export interface StyleType {
	[index: string]: InnerType;
}

export interface InnerType {
	[index: string]: string;
}

const styleVariants: StyleType = {
	me: {
		background:
			"p-2 bg-main inline-block max-w-[230px] rounded-xl border-2 border-beige",
		color: "text-sm text-white leading-relaxed",
		sorting: "flex items-end flex-row-reverse gap-1",
	},
	counterPart: {
		background:
			"p-2 bg-white inline-block max-w-[230px] rounded-tr-xl rounded-bl-xl rounded-br-xl border-2 border-beige ml-10",
		color: "text-sm text-darkGray leading-relaxed",
		sorting: "flex items-end gap-1",
	},
};

export const getStyleDependOnUserId = (user_id: number, location: string) => {
	return styleVariants[convertUserId(user_id)][location];
};
