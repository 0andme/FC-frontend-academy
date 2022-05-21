#### ts로 변환을 위한 환경설정

[What is a tsconfig.json
](https://www.typescriptlang.org/ko/docs/handbook/tsconfig-json.html)

tsconfig.json설정

```json
"compilerOptions": {

    "strict": true, // 엄격한 타입 규칙
    "target": "ES5", // 자바스크립트 문법체계에 대한 옵션
    "module": "CommonJS",
    "alwaysStrict": true,
    "noImplicitAny": true,// ts의  any타입를 명시
    "noImplicitThis": true,
    "sourceMap": true,
    "downlevelIteration": true
  }
```

`sourceMap` 옵션에 대해
dist 폴더에는 빌드 파일이 들어가 있고 js.map파일이 있다. 브라우저는 js파일을 실행하지만 우리가 작성한 코드는 ts이기 때문에 브라우저에서 작성한 코드에 대한 정보가 없다. js.map파일은 이러한 정보를 알려주는, 일종의 연결 정보를 갖꼬 있는 파일이라고 할 수 있다.

#### 타입 지정하기

타입 알리아스 혹은 인터페이스 지정 시 **대문자**로 주로 시작한다.

1. 객체데이터의 타입 alias 시 콤마 대신 세미콜론으로 끝남
2. 옵셔널한 데이터의 경우 해당 데이터 변수명 뒤에 물음표를 붙임
3. 두가지 타입의 or and를 갖는 타입을 유니언 타입이라고 함
4. 유니언 타입의 타입 가드 코드를 잊지말자
5. `&`으로 n개의 타입을 묶을 수 있다

에디터 상에서 json응답결과를 볼수 있는 확장프로그램`REST Client`

#### 제네릭

함수의 리턴 값이 여러 타입인 경우 `제네릭` 개념을 사용해볼 수 있다. 함수의 리턴값은 기술되었지만, 함수의 리턴값을 받는 변수의 경우 어떤 타입의 데이터가 올지 모호한 상황이 되는 것이다.

입력이 n개의 유형일때 출력도 n개의 유형임을 정의하는 것이 제네릭.
호출할 때 넘어온 타입 T를 리턴값 T로 쓴다는 것.
