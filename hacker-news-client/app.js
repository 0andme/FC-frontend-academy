const ajax = new XMLHttpRequest();
// value urls
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const container = document.getElementById("root");

const store = {
  currentPage: 1,
};
// func api 호출 함수
function getData(url) {
  // 요청 초기화
  ajax.open("GET", url, false);
  //요청 보내기
  ajax.send();
  // 응답 데이터 가져오기
  return JSON.parse(ajax.response);
}
// func 글 목록 가져오기
function newsFeed() {
  // api 뉴스 데이터 가져오기
  const newsFeed = getData(NEWS_URL);
  // 10개의 뉴스 타이틀
  const newsList = [];
  newsList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsList.push(`
  <ul>
    <li>
      <a href='#/show/${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>
  </ul>`);
  }
  newsList.push("</ul>");
  newsList.push(`
  <div>
    <a href="#/page/${
      store.currentPage > 1 ? store.currentPage - 1 : 1
    }">이전 페이지</a>
    <span>${store.currentPage}</span>
    <a href="#/page/${
      store.currentPage === newsFeed.length / 10
        ? newsFeed.length / 10
        : store.currentPage + 1
    }">다음 페이지</a>
  </div>`);
  container.innerHTML = newsList.join("");
}

// func 뉴스 content 가져오기
function newsDetail() {
  const id = this.location.hash.substring(7);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  // 클릭된 타이틀의 타이틀 출력
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href='#/page/${store.currentPage}'>목록으로</a>
  </div>`;
}
// func 라우터
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    newsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = Number(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

// event hash변경시 라우터 함수 호출
window.addEventListener("hashchange", router);
// 호출 라우터 함수
router();
