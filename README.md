# UNIST × CNU Joint Workshop Website

UNIST와 충남대학교 공동 워크숍을 위한 심플한 GitHub Pages 웹사이트입니다.

## 포함 기능

- 워크숍 기본 일정 안내
- 세부 스케줄
- 점심/저녁 식당 위치 링크
- 발표자료 업로드 / 열람 링크
- 모바일 반응형 디자인

## 1. 정보 수정

### 날짜 및 장소

`script.js` 상단을 수정하세요.

```js
const WORKSHOP = {
  date: "2026. 10. 16. (Fri)",
  venue: "UNIST 110동 N101",
  repository: "https://github.com/YOUR-ORG/YOUR-REPO",
};
```

### 스케줄 / 식당

`index.html`의 `schedule-row` 부분에서 시간, 제목, 설명, 식당 링크를 수정하세요.

예:

```html
<a class="map-link"
   href="https://map.naver.com/..."
   target="_blank"
   rel="noopener noreferrer">
  식당 위치 보기 ↗
</a>
```

## 2. 발표자료 업로드 설정

GitHub Pages 자체에는 파일 업로드 서버 기능이 없습니다. 이 템플릿은 GitHub 저장소의 `materials/` 폴더 업로드 화면으로 연결합니다.

1. 저장소에 `materials` 폴더를 만듭니다.
2. `script.js`의 `repository`를 실제 저장소 주소로 변경합니다.
3. 발표자에게 저장소 Write 권한을 부여합니다.
4. 홈페이지의 **발표자료 업로드** 버튼을 누르면 GitHub 업로드 화면으로 이동합니다.

공개 업로드가 필요하다면 Google Drive / Dropbox / Google Form 업로드 링크로 버튼 URL만 교체할 수도 있습니다.

## 3. GitHub Pages 배포

1. 이 폴더의 파일을 GitHub 저장소 root에 업로드합니다.
2. GitHub 저장소의 **Settings → Pages**로 이동합니다.
3. `Deploy from a branch`를 선택합니다.
4. Branch를 `main`, 폴더를 `/ (root)`로 선택합니다.
5. Save를 누릅니다.

잠시 후 다음과 같은 주소로 사이트가 공개됩니다.

```text
https://YOUR-ID.github.io/YOUR-REPO/
```

## 파일 구성

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── materials/
    └── README.md
```
