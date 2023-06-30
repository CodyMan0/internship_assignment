import { AxiosInstance } from "axios";
import { MessageResponse, MessageService } from "../types/MessageType";

export default class MessageServiceImpl implements MessageService {
	constructor(private httpClient: AxiosInstance) {}

	async getAllMessage() {
		const response = await this.httpClient.get<MessageResponse>("test_data");
		// const response = await this.httpClient.get<MessageResponse>(
		// 	"data/message.json"
		// );
		const { data } = response;

		return data;
	}

	// async postMessage({ value }: PostMessageType) {
	// 	const response = await this.httpClient.get<MessageResponse>("서버 통신 x");

	// 	const { data } = response;

	// 	return data;
	// }
}
