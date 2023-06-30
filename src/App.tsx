import { MessageProvider } from "./context/MessageContext";
import { ModalProvider } from "./context/ModalContext";
import HttpClient from "./http/HttpClient";
import Chat from "./page/Chat";
import MessageServiceImpl from "./services/MessageService";

function App() {
	const client = new HttpClient("http://test.vanillabridge.com/");
	// const client = new HttpClient("http://localhost:5173/");
	const messageService = new MessageServiceImpl(client.httpClient);

	return (
		<MessageProvider messageService={messageService}>
			<ModalProvider>
				<Chat />
			</ModalProvider>
		</MessageProvider>
	);
}

export default App;
