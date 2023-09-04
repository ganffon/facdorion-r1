## ✨ Development Rules

### ✅ `네이밍 규칙`

- `variable` 이름은 `camelCase` 방식을 따른다.
- `constant` 이름은 모든 문자를 `upper case`로 작성하며 `snake_case` 방식을 따른다.
- `function` 이름은 `camelCase` 방식을 따른다.
- `directory` 와 `script` 이름은 `camelCase` 방식을 따른다.
- `script` 의 `extension` 은 routing 에 직접 연결되는 파일만 `*.jsx` 로 한다.<br>그 외는 모두 \*.js 로 작성한다.
- `component` 이름은 `PascalCase` 방식을 따른다.<br>`component` 의 `export` 방식은 아래와 같은 방식을 따른다.<br>index.js 파일을 자동 생성하여 export module 로 routing 을 하고 있기 때문이다.
  <pre>
      export function Line(props) {
          ...
          return
      }
  </pre>
  혹은
  <pre>
      export const Line = (props) => {
          ...
          return
      }
  </pre>

---

### ✅ `pages 폴더 아래에 새로운 페이지를 추가 개발한 경우`

> directory root 경로에 있는 pagesIndex.js 파일을 실행시켜야 한다.

#### `실행방법`

1. pagesIndex.js 파일 우클릭 "통합 터미널에서 열기"
2. `node pagesIndex.js` 입력하여 실행

---

### ✅ `배포하는 순서`

1. web 에서 배포내용을 작성하여 등록한다. 등록 할 때 년월일시분으로 신규 버전이 자동 생성된다.
2. directory root 경로에 있는 versionUpdate.js 파일 우클릭 "통합 터미널에서 열기"
3. `node versionUpdate.js` 입력하여 실행한다. <br> 1번에서 생성된 신규 버전을 가져와 Version.js 파일 내의 Version 변수 값을 갱신하는 작업.
4. `npm run build`
5. 프론트 서버에 build 파일을 옮겨서 배포
6. 1번에서 작성하였던 배포 목록에서 `[미적용]` 버튼을 눌러 적용시켜준다.<br>적용중인 배포 목록 중에서 가장 최신 버전과 기존 web 버전을 5분마다 비교하여 새로고침(F5) 하라는 알림을 띄워주고 있기 때문이다.

---
