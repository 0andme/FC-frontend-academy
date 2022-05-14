#### 실습과정

[hacker news api 문서](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

1. index.html 과 app.js파일 생성
2. 터미널에 `parcel index.html`입력시 `http://localhost:1234/` 서버 열림
3. [XMLHttpRequest 공식 문서](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
4. network->XHR->preview와 response를 보면 preview의 데이터가 더 그룹핑이 잘 되어 있음. `JSON.parse()`을 통해 json데이터를 자바스크립에서 다루기 쉬운 데이터 형태로 변경
5. 받아온 데이터의 title값을 출력 - root 아래에 ul li태그 추가 하기
   6-1. 하드 코딩
   6-2. 반복문 이용
6. 변경될 가능성이 있는 url을 변수에 저장
