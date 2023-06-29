import { AxiosInstance } from "axios";
import { MessageResponse, MessageService } from "../types/MessageType";
// import HTTPError from "../network/httpError";

export default class MessageServiceImpl implements MessageService {
	constructor(private httpClient: AxiosInstance) {}

	async getAllMessage() {
		// const response = await this.httpClient.get<MessageResponse>("test_data");
		const response = await this.httpClient.get<MessageResponse>(
			"data/message.json"
		);
		const { data } = response;

		return data;
	}
}
