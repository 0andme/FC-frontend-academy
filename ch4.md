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
