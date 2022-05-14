const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
// 요청 초기화
ajax.open("GET", NEWS_URL, false);
//요청 보내기
ajax.send();
// 응답 데이터 가져오기
const newsFeed = JSON.parse(ajax.response);
// ul-li태그 추가하기
document.getElementById("root").innerHTML = `<ul>
  <li>${newsFeed[0].title}</li>
  <li>${newsFeed[1].title}</li>
  <li>${newsFeed[2].title}</li>
</ul>`;
// 반복코드
const ul = document.createElement("ul");
document.getElementById("root").appendChild(ul);
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}
