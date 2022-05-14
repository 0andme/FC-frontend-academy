const ajax = new XMLHttpRequest();
// urls
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const container = document.getElementById("root");
const content = document.createElement("div");
const ul = document.createElement("ul");
container.appendChild(ul);
container.appendChild(content);

// 요청 초기화
ajax.open("GET", NEWS_URL, false);
//요청 보내기
ajax.send();
// 응답 데이터 가져오기
const newsFeed = JSON.parse(ajax.response);

// 뉴스 타이틀 클릭시 변경되는 hash 이벤트
window.addEventListener("hashchange", function () {
  // content 가져오기
  const id = this.location.hash.substring(1);
  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();
  const newsContent = JSON.parse(ajax.response);
  // 클릭된 타이틀의 타이틀 출력
  const title = this.document.createElement("h1");
  content.appendChild(title);
  title.innerHTML = newsContent.title;
});

// 10개의 뉴스 타이틀
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
  <ul>
    <li>
      <a href='#${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>
  </ul>`;

  // ul.appendChild(div.children[0]);
  ul.appendChild(div.firstElementChild);
}
