import { AxiosInstance } from "axios";
import { MessageResponse, MessageService } from "../types/MessageType";
// import HTTPError from "../network/httpError";

export default class MessageServiceImpl implements MessageService {
	constructor(private httpClient: AxiosInstance) {}

	async getAllMessage() {
		const response = await this.httpClient.post<MessageResponse>("test_data");
		const { data } = response;

		return data;
	}
}
