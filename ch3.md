#### 실습과정

[hacker news api 문서](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

[XMLHttpRequest 공식 문서](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)

1. index.html 과 app.js파일 생성
2. 터미널에 `parcel index.html`입력시 `http://localhost:1234/` 서버 열림
3. network->XHR->preview와 response를 보면 preview의 데이터가 더 그룹핑이 잘 되어 있음.
4. `JSON.parse()`을 통해 json데이터를 자바스크립트에서 다루기 쉬운 데이터 형태로 변경
5. 총 10개의 뉴스 타이틀 출력
6. 타이틀 클릭시 url 변경 및 해당 뉴스의 타이틀 보여주기
   1. 이벤트 함수는 브라우저가 제공해준다.
   2. url의 hash 변경을 감지하는 hashchange 이벤트 함수
7. 문제점
   1. js만 보고 ui의 구조를 파악하기 어렵다 -> 문자열을 이용
8. 타이틀 클릭시 목록 대신 타이틀과 목록 이동 a 태그 표시 - 덮어쓰기
9. 라우터 만들기
   1. hash 체인지가 일어날때 목록을 보여줄 건지. 디테일을 보여줄건지 if문으로 분기시킴
   2. location.hash값이 #이면 빈문자열을 반환 시킴
10. 페이징 시스템
11. 마크업을 위한 템플릿 구현
    1. 템플릿의 장점 ui요소가 눈에 바로 보임
    2. ui에 어떤 데이터가 들어가는지가 마캉을 통해 쉽게 알 수 있음
12. tailwindcss
    1. 주소 `https://tailwindcss.com/docs/installation`
    2. cdN방법 `<script src="https://cdn.tailwindcss.com"></script>`
13. font awesome
    1. https://cdnjs.com/에서 font awesome의 cdn 가져오기
14. 읽음 표시 기능 추가
    1. 기존 받아온 데이터에 읽음표시 데이터 추가
    2. 글 클릭시 for문으로 해당 id와 글 전체목록의id 비교하여 읽음표시 true로 변경
