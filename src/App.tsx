import Chat from "./page/Chat";
import HttpClient from "./http/HttpClient";
import MessageServiceImpl from "./services/MessageService";
import { MessageProvider } from "./context/MessageContext";
import { ModalProvider } from "./context/ModalContext";

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
