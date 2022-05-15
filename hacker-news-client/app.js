const ajax = new XMLHttpRequest();
// urls
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const container = document.getElementById("root");

// api 호출 함수
function getData(url) {
  // 요청 초기화
  ajax.open("GET", url, false);
  //요청 보내기
  ajax.send();
  // 응답 데이터 가져오기
  return JSON.parse(ajax.response);
}
// 글 목록 가져오는 함수
function newsFeed() {
  // api 뉴스 데이터 가져오기
  const newsFeed = getData(NEWS_URL);
  // 10개의 뉴스 타이틀
  const newsList = [];
  newsList.push("<ul>");
  for (let i = 0; i < 10; i++) {
    newsList.push(`
  <ul>
    <li>
      <a href='#${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>
  </ul>`);
  }
  newsList.push("</ul>");
  container.innerHTML = newsList.join("");
}

// 뉴스 content 가져오기
function newsDetail() {
  const id = this.location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  // 클릭된 타이틀의 타이틀 출력
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href='#'>목록으로</a>
  </div>`;
}
// 라우터 함수
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

// 뉴스 타이틀 클릭시 변경되는 hash 이벤트
window.addEventListener("hashchange", router);

router();
