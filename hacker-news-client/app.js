const ajax = new XMLHttpRequest();
// urls
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const container = document.getElementById("root");
const content = document.createElement("div");
const ul = document.createElement("ul");
container.appendChild(ul);
container.appendChild(content);

// api 뉴스 데이터 가져오기
const newsFeed = getData(NEWS_URL);

// 뉴스 타이틀 클릭시 변경되는 hash 이벤트
window.addEventListener("hashchange", function () {
  // content 가져오기
  const id = this.location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
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

// api 호출 함수

function getData(url) {
  // 요청 초기화
  ajax.open("GET", url, false);
  //요청 보내기
  ajax.send();
  // 응답 데이터 가져오기
  return JSON.parse(ajax.response);
}
