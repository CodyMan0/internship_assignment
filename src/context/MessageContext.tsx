import { createContext } from "react";
import { MessageService } from "../types/MessageType";

interface MessageProviderProps {
	children: React.ReactNode;
	messageService: MessageService;
}

export const MessageContext = createContext<MessageService | null>(null);
export const MessageProvider = ({
	children,
	messageService,
}: MessageProviderProps) => {
	return (
		<MessageContext.Provider value={messageService}>
			{children}
		</MessageContext.Provider>
	);
};
