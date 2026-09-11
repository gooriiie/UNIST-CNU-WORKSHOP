// --------------------------------------------------
// 이 파일 상단의 값만 바꾸면 페이지 주요 정보가 변경됩니다.
// --------------------------------------------------
const WORKSHOP = {
  date: "2026. 09. 30 ~ 2026. 10. 01",
  venue: "충남대학교",

  // GitHub 저장소 주소를 실제 주소로 바꾸세요.
  // 예: https://github.com/dilab-cnu/unist-cnu-workshop
  repository: "https://github.com/gooriiie/UNIST-CNU-WORKSHOP",
};

const dateEl = document.querySelector("#event-date");
const venueEl = document.querySelector("#event-venue");
const uploadLink = document.querySelector("#upload-link");
const materialsLink = document.querySelector("#materials-link");

if (dateEl) dateEl.textContent = WORKSHOP.date;
if (venueEl) venueEl.textContent = WORKSHOP.venue;

if (WORKSHOP.repository && !WORKSHOP.repository.includes("YOUR-ORG")) {
  uploadLink.href = `${WORKSHOP.repository}/upload/main/materials`;
  materialsLink.href = `${WORKSHOP.repository}/tree/main/materials`;
}
