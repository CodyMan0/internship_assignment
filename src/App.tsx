import HttpClient from "./http/HttpClient";

function App() {
	const client = new HttpClient("http://test.vanillabridge.com/test_data");
	return (
		<div className="text-3xl bg-background w-full h-full ">
			<nav>header</nav>
			<section>매세지</section>
		</div>
	);
}

export default App;
