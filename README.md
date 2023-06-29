# chat_room assignment

## 📅 과제 기간

기간 : 2023년 06월 29일 ~ 2022년 06월 30일 자정

## 🛠 기술 스택

- React.js
- typescript
- axios
- tailwind.css

## 🏁 프로젝트 실행 방법

```sh
$ npm install
```

```sh
$ npm run dev / yarn dev
```

## 서버 종료시, 목데이터로 구현 확인 방법

```tsx
//App.tsx
// 로컬 json파일을 활용시
	//const client = new HttpClient("http://test.vanillabridge.com/");
	const client = new HttpClient("http://localhost:5174/"); // 주의!! 기본 포트는 5173번으로 자신의 로컬 Port 사용


// MessageService.ts

  async getAllMessage() {
		// const response = await this.httpClient.get<MessageResponse>("test_data");
		const response = await this.httpClient.get<MessageResponse>(
			"data/message.json"
		);
		const { data } = response;

		return data;
	}

```

## 👍 에러 해결 과정

## issue Template

```md
🚅 Issue 한 줄 요약
이슈를 한줄로 요약해주세요.

🤷 Issue 세부 내용
무슨 이슈인가요?

✨ 기대 결과
어떤 결과물을 원하시나요?

📸 스크린샷
이슈에 해당하는 부분을 보여주세요.
```
