export type MessageResponse = Promise<MessageInfoType[]>;

export interface MessageService {
	getAllMessage: () => Promise<MessageResponse>;
	postMessage: (messageInfo: any) => void;
}

export interface MessageInfoType {
	user_id: number;
	user_name: string;
	photo_url: string;
	created_at: string;
	msg: MessageType;
}

interface MessageType {
	mtype: "text" | "photo";
	content: string;
}
