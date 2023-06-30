# chat_room assignment

## 📅 1. 과제 기간

**기간 : 2023년 06월 29일 13:00 ~ 2022년 06월 30일 23:00**

## 🛠 2. 기술 스택

- React.js
- Typescript
- Axios
- Tailwind.css

## 🏁 3. 프로젝트 실행 방법

```sh
1. $ npm install
```

```sh
2. $ npm run dev / yarn dev
```

## 4. 📺 결과물

### 4-1 단순화한 컴포넌트

<img src="https://github.com/CodyMan0/koda_frontend/assets/93697790/f454ee9e-0753-4e0e-b3d7-234e9330871b" alt="UI_gif">
### 4-2 홈페이지 UI

<p align="center">
	<img src="https://github.com/CodyMan0/koda_frontend/assets/93697790/27df67e6-54b3-4bdc-b6ac-b834fd33cb36" alt="UI_gif">
</p>

## 💣 5. 서버 문제시, 목데이터로 구현한 페이지 확인 방법

1. 최상위 App.tsx 수정

```tsx
//App.tsx
// 로컬 json파일을 활용시
//const client = new HttpClient("http://test.vanillabridge.com/");
const client = new HttpClient("http://localhost:5173/"); //로컬 Port 사용
```

2. services/MessageService.ts 수정

```tsx
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

## 6. 🏗️ 폴더 구조

```sh
 📂public
 📂src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📜CounterpartInfo.tsx
 ┃ ┣ 📜Date.tsx
 ┃ ┣ 📜MessageBox.tsx
 ┃ ┣ ...
 ┣ 📂context
 ┃ ┣ 📜MessageContext.tsx
 ┃ ┗ 📜ModalContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useHttpAxios.ts
 ┃ ┣ 📜useMessageService.ts
 ┃ ┗ 📜useModal.ts
 ┣ 📂http
 ┃ ┣ 📜HttpClient.ts
 ┃ ┗ 📜HttpError.ts
 ┣ 📂page
 ┃ ┗ 📜Chat.tsx
 ┣ 📂services
 ┃ ┗ 📜MessageService.ts
 ┣ 📂types
 ┃ ┗ 📜MessageType.ts
 ┣ 📂utils
 ┃ ┣ 📜formatDate.ts
 ┃ ┣ 📜sortMessage.ts
 ┃ ┣ 📜styleMessageBox.ts
 ┃ ┗ 📜userId.ts
 ┣ 📜App.tsx
 ┣ 📜global.css
 ┗ 📜main.tsx
```

### 6-1. 규칙

- page : route가 지정된 페이지입니다.
- components/common : 로직과 상관없이 공통으로사용하는 컴포넌트입니다.
- context : context 디렉토리 입니다.
- hooks : 컴포넌트에서 로직을 분리하기 위한 디렉토리 입니다.
- http : 통신 에러 및 axios instance를 관리하는 디렉토리입니다.
- services : 서버 상태를 CRUD하는 디렉토리입니다.
- types : typescript의 type들을 모아놓은 디렉토리입니다.
- utils : 부수적인 함수들을 모아놓은 파일입니다.

### 6-2. 디자인 시스템 (서비스 패턴)

이전의 프로젝트를 진행하면서 흩어져있는 통신 로직으로 인해 불필요한 에러들을 마주했습니다. 이번 과제는 비록 한 페이지이지만 다양한 요구 사항이 더해졌을 때를 가정하고 구현했습니다. 최상위 루트에 의존성을 주입하여 통신 로직을 하나의 클래스에서 관리할 수 있도록 구현하였습니다.

## 7. 🔨 핵심 구현

- [x] 서버에서 가져온 메세지 데이터를 화면에 출력
- [x] 공통 컴포넌트인 MessageBox user_id에 따라 다른 UI 구현

```tsx
const backgroundFromUserId = getStyleDependOnUserId(user_id, "background");
const textColorFromUserId = getStyleDependOnUserId(user_id, "color");
const sortingFromUserId = getStyleDependOnUserId(user_id, "sorting");

//utils/styleMessageBox.ts
export const getStyleDependOnUserId = (user_id: number, location: string) => {
	return styleVariants[convertUserId(user_id)][location];
};
```

- [x] 메세지는 created_at(보낸시간) 순으로 정렬
- [x] created_at 이 같으면 id 순으로 정렬

```tsx
//utils/sortMessage.ts
export const sortedMessageOnTimesAndId = (
	messages: MessageInfoType[] | undefined
) => {
	if (messages) {
		return messages.sort((a, b) => {
			const prevDate = +new Date(a.created_at);
			const nextDate = +new Date(b.created_at);

			if (prevDate < nextDate) {
				return -1;
			} else if (prevDate > nextDate) {
				return 1;
			} else {
				if (a.id < b.id) {
					return -1;
				} else if (a.id > b.id) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	}
	return null;
};
```

- [x] 채팅방 크기는 360 \* 720으로 고정

```js
//global.css
body {
	margin: 0 auto;
	display: flex;
	place-items: center;
	width: 360px;
	height: 720px;
}
```

- [x] msg.mtype이 photo인 메시지는 무시

```tsx
{
	messageList &&
		messageList.map((message, index) => {
			if (message.msg.mtype === "photo") {
				return null;
			}
			const firstDate = removeSameDay?.[index];
			return (
				<div key={index}>
					{!!firstDate && <Date createDate={firstDate} />}
					<MessageBox message={message} />
				</div>
			);
		});
}
```

- [x] 메세지 입력창 텍스트 입력 전 placeholder: “메세지를 입력해주세요"를 구현
- [x] 서버로 Post는 하지 않지만 Get으로 받은 상태에 임시 업데이트 (새로 고침시 저장 X)

```tsx
const handleSubmit = (e: React
	FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const present = new Date();

		setMessages((prev) => [
			...prev,
			{
			created_at: `${present.toString()}`,
			id: 140,
			msg: {
				mtype: "text",
				content: `${userInputValue}`,
			},
			photo_url: "https://photo.vanillabridge.com/app_photos/agent_man.JPG",
			user_id: 1,
			user_name: "소개팅남",
		},		]);
	scrollYToBtm();
	setUserInputValue("");
	};
```

임시로 userInput 컴포넌트에서 form이 제출이 될 경우, 서버로 받은 메세지 배열 뒤에 추가

## 8. 🔨 디자인 구현

- [x] 채팅방 상단 바, 하단 input area background-color: #FAF0E1
- [x] 채팅방 background-color: #FFF9EF
- [x] 상대 메시지 background-color: 흰색, 나의 메시지 background-color: #03006E
- [x] 메시지는 flexbox 형태로 구현
- [x] 메시지가 여러 줄인 경우 박스 크기가 부모를 넘어가는 것을 방지하기 위해 적절한 max-width 값을 할당
- [x] 상대방 메시지 박스의 border-radius는 좌상단=0, 나머지=12px.
- [x] 헤더의 back 아이콘과 전송 버튼의 아이콘 사용 (chevron_left, arrow_back)
- [x] 메세지 입력창에서 엔터키 입력으로도 메세지 전송
- [x] 전송 버튼은 메시지의 length > 0일 때만 보이도록 구현

```tsx
{
	!!userInputValue && (
		<FiArrowUpCircle className="absolute right-3 text-3xl text-white fill-main" />
	);
}
```

## 9. 🔨 추가 구현

- [x] 년월일을 기준으로 같은 날짜의 메세지 상단에 날짜 구현

```tsx
function createNewDateList(messageList: MessageInfoType[] | null) {
    const test = messageList?.map((message, index) => {
        if ( index > 0 &&
           formatDate(messageList[index - 1].created_at) === formatDate(message.created_at)
           ) {
             return null;
           } else {
             return formatDate(message.created_at);
           }
        });
  return test;
}

// Chat.tsx
const ChatSection = ({ messageList, chatRef }: Props) => {
    const removeSameDay = createNewDateList(messageList);

    return (
        <div className="py-2 px-4 w-full h-[86%] overflow-y-auto" ref={chatRef}>
          {messageList && messageList.map((message, index) => {
              ...
          const firstDate = removeSameDay?.[index];
          return (
                 <div key={index}>
                   {!!firstDate && <Date createDate={firstDate} />}
                   <MessageBox message={message} />
                 </div>
                );
            })
          }
         </div>
	);
     };

export default ChatSection;

```

서버로 부터 받은 데이터를 활용하여 새로운 배열을 만듭니다.index는 1부터 시작하며 이전 객체의 create_at과 비교하여 동일하면 null을 아니라면 '2023년 8월 10일'인 반환값을 가집니다. messageList.map() 내부의 index와 연결하여 새로운 배열의 인덱스 값이 null이면 Date를 렌더링하지 않습니다.

- [x] 대화창 '//n' 처리

  ```ts
  {
  	msg.content.split("\\n").map((line, index) => {
  		return <p key={index}>{line}</p>;
  	});
  }
  ```

- [x] Header.tsx user_name 과 photo_url

```tsx
//useHttpAxios.ts

const userNameFromMsgs = data?.find(
	(obj: MessageInfoType) => obj.user_id === 2
);
```

custom-hook 안에서 받아온 서버 상태 배열 중 user_id가 2인 객체 하나를 찾아 useHttpAxios의 리턴 객체 안에 하나의 프로퍼티로 추가하여 구현하였습니다.

- [x] 프로필 사진 클릭시 확대 사진 팝업

```tsx
import useModal from "../../hooks/useModal";

const ProfileImage = ({ url }: Props) => {
	const { isOpen, openModal } = useModal();

	return (
		<div className="w-8 h-8 flex items-center">
			<img
				src={url}
				alt="상대방이미지"
				className="max-w-full h-au     object-cover rounded-[50     cursor-pointer"
				onClick={openModal}
			/>
		</div>
	);
};

export default ProfileImage;
```

ModalContext를 만들어 useModal 이라는 hook안에 import하였습니다. 그 후 필요한 컴포넌트에서 useModal custom-hook을 import하여 구현하였습니다.
