import { MessageProvider } from "./context/MessageContext";
import HttpClient from "./http/HttpClient";
import MessageServiceImpl from "./services/MessageService";

function App() {
	const client = new HttpClient("http://test.vanillabridge.com/");
	const messageService = new MessageServiceImpl(client.httpClient);

	return (
		<MessageProvider messageService={messageService}>
			<div className="text-3xl bg-background w-full h-full ">
				<nav>header</nav>
				<section>매세지</section>
			</div>
		</MessageProvider>
	);
}

export default App;
