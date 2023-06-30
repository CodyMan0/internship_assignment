const MESSAGE = {
	// 에러가 어떻게 오는지 확인 후, 설정
} as const;

export default class HTTPError extends Error {
	constructor(
		private statusCode: number,
		public message: string,
		private data?: string
	) {
		super(message);
	}

	get Message() {
		if (this.statusCode === 400) {
			switch (this.data) {
				case MESSAGE:
					this.message = "";
					break;
				default:
					throw new Error("Unknown Error");
			}
			return this.message;
		}
		throw new Error("unknown Error");
	}
}
