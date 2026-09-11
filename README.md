# UNIST x CNU 공동 워크샵 Website

UNIST와 충남대학교 공동 워크샵용 GitHub Pages 웹사이트입니다.

## 현재 반영된 주요 정보

- 행사명: **UNIST x CNU 공동 워크샵**
- 일정: **2026.09.30 ~ 2026.10.01**
- 장소: **충남대학교**
- 9월 30일: 점심 → CNU 연구발표 → UNIST 연구발표 → 임성수 교수님 발표 → CNU 투어 → 저녁/네트워킹
- 10월 1일: 점심 식사
- 발표자료 저장소: `gooriiie/UNIST-CNU-WORKSHOP/materials`

## 어디를 수정하면 되나요?

### 1. 행사 날짜와 장소

`script.js` 맨 위의 `WORKSHOP` 객체를 수정합니다.

```js
const WORKSHOP = {
  date: "2026. 09. 30 ~ 2026. 10. 01",
  venue: "충남대학교",
  repository: "https://github.com/gooriiie/UNIST-CNU-WORKSHOP",
};
```

### 2. 홈페이지 큰 제목

`index.html` 상단의 `hero` 섹션에서 아래 부분을 수정합니다.

```html
<h1>UNIST x CNU<br />공동 워크샵</h1>
```

### 3. 세부 스케줄 / 발표자 / 식당 링크

`index.html`에서 `id="schedule"`을 검색하세요. 그 아래의 `schedule-row`들이 각각 하나의 일정입니다.

- 시간: `<div class="schedule-time">14:00</div>`
- 일정명: `<h3>충남대학교 연구발표</h3>`
- 설명: `<p>...</p>`
- 식당 링크: `<a class="map-link" href="...">...</a>`
- 발표자: `speaker-list` 안의 `speaker-item`을 추가/수정

### 4. 숙소 정보

`index.html`에서 `id="accommodation"`을 검색하고 숙소명, 위치, 링크를 수정합니다.

### 5. 발표자료 링크

`script.js`의 `repository`만 실제 저장소 주소로 두면:

- 발표자료 업로드 → `.../upload/main/materials`
- 업로드된 자료 보기 → `.../tree/main/materials`

으로 자동 연결됩니다.

## GitHub Pages 반영

수정 파일을 현재 Pages가 바라보는 브랜치에 업로드/commit 한 후 페이지를 새로고침하세요. 예전 화면이 남으면 `Ctrl + Shift + R`로 강력 새로고침하면 됩니다.
