## MBTI 테스트

햅삐햅삐한 MBTI 테스트 페이지
<br/><br/>

## 배포 링크

[햅삐햅삐한 MBTI 하러가기](https://mbti-tau.vercel.app/)
<br/><br/>

## 제작 기간

24.09.05 ~ 24.09.10
<br/><br/>

## 기술스택

<div style="display: flex; gap: 10px;">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/zustand-F3DF49?style=flat-square&logo=standardjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/glitch-3333FF?style=flat-square&logo=glitch&logoColor=white"/>
</div>

<br/><br/>

## 프로젝트 기능

### 로그인 / 회원 가입
![회원가입](https://github.com/user-attachments/assets/b48abd95-607f-403e-b6e5-7d10dd53a951)

- 회원가입
- 로그인

### MBTI 테스트
![테스트](https://github.com/user-attachments/assets/1466b20c-2f67-4949-9ae5-30b57d0a4290)

- 테스트 후 내 MBTI 확인

### 결과 목록
![3333333333](https://github.com/user-attachments/assets/aed3a7a0-c770-4a9a-8396-e3a3240c5537)

- 다른사람의 결과 보기
- 내 결과 삭제/ 공개/ 비공개 처리

### 마이페이지
![444444](https://github.com/user-attachments/assets/92ae32e2-633f-4956-a5e3-0cbb6b224bfe)

- 토큰만료
- 마이페이지
  
<br/><br/>
## 파일 구조

```
mbti
├─ public
│  ├─ icons
│  │  └─ icon.png
│  ├─ npm.js
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ data
│  │  │  ├─ descriptions.js
│  │  │  ├─ images.js
│  │  │  ├─ maintext.js
│  │  │  └─ questions.js
│  │  ├─ images
│  │  │  ├─ bg.png
│  │  │  └─ image1.png
│  │  └─ styles
│  │     ├─ index.css
│  │     └─ layout.css
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Layout.jsx
│  │  │  ├─ Nav.jsx
│  │  │  └─ ui
│  │  │     ├─ Article.jsx
│  │  │     ├─ AuthForm.jsx
│  │  │     ├─ Button.jsx
│  │  │     ├─ Input.jsx
│  │  │     ├─ NavLink.jsx
│  │  │     └─ TextBox.jsx
│  │  ├─ pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Profile.jsx
│  │  │  └─ Signup.jsx
│  │  ├─ shared
│  │  │  ├─ ProtectedRoute.jsx
│  │  │  └─ Router.jsx
│  │  └─ test
│  │     ├─ TestForm.jsx
│  │     ├─ TestPage.jsx
│  │     ├─ TestResult.jsx
│  │     ├─ TestResultItem.jsx
│  │     ├─ TestResultList.jsx
│  │     └─ TestResultListHub.jsx
│  ├─ core
│  │  ├─ api
│  │  │  ├─ auth.js
│  │  │  └─ testResults.js
│  │  ├─ hooks
│  │  │  ├─ useAuth.js
│  │  │  └─ useTest.js
│  │  ├─ instance
│  │  │  └─ axiosInstance.js
│  │  ├─ stores
│  │  │  ├─ useAuthStore.js
│  │  │  └─ useTestStore.js
│  │  └─ utils
│  │     └─ calculateMBTI.jsx
│  └─ index.jsx
├─ yarn.lock
├─ index.html
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ postcss.config.js
└─ tailwind.config.js
```
<br/><br/>


## 트러블 슈팅


| 문제                                                                                                                            | 원인                                                                                                        | 해결                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 로그인 후 새로고침을 하면 로그인이 풀리는 이슈                                                                                  | **Access Token**이 새로고침 시 사라지는 문제가 발생하여 생기는 이슈                                         | 유저 정보를 저장하고 나서, useAuthStore.js에서 사용자 정보를 저장하고 로그인시 초기값을 localStorage에 저장하고 가지고 오는 것으로 해결 |
| 닉네임 바꾸고 나서 바로 메인 페이지에 적용되지 않는 이슈                                                                        | 닉네임 바꿀 때 localstorage에 객체 병합 되지 않고 사라지는 이슈                                             | 닉네임 업데이트 하는 상태관리를 useAuthStore에 따로 제작하여 수정된 값을 받아 zustand에 다시 넘기게 처리                                |
| **TestResult** 페이지 테스트 결과 상태관리 및 분리 도중 결과보기 페이지를 클릭시 다른사람의 결과 페이지들이 뜨지 않는 상황 발생 | TestPage의 **navigate**에서 **state: {}** 안에 결과 정보를 담아 제출 한 채로 이어져 갔기 때문에 발생한 에러 | location.state로 데이터를 넘기지 않고 상태관리를 통해 결과 페이지 이동 처리를 위해 **zustand**에 상태 저장                      |

<br/><br/>

## 그외 작업

1. **모바일 버튼 이슈 해결**: 모바일 페이지에서 버튼이 눌리지 않는 이슈 발생으로 인해 모바일 UI 문제를 수정 사용성 개선
2. **기능 추가 및 테스트 완료**: 테스트 완료 후 불필요한 파일(DB 백업) 삭제, 테스트 페이지 가안 완성 등 다양한 테스트 관련 작업이 진행
3. **리팩토링**: 로그인 훅 분리, TestResult 페이지 상태관리 개선 등 코드 구조를 개선하고 효율성을 높이는 작업
4. **버그 수정**: 로그인 후 새로고침 시 데이터 유실 문제, 닉네임 변경 시 localStorage와의 동기화 문제, 회원가입 시 중복 아이디 처리 문제 등 다양한 버그를 수정하며 프로젝트의 안정성 높임
5. **상태 관리 및 로직 개선**: useAuthStore 관련하여 상태 관리 로직을 리팩토링하고, 속성 업데이트 방식을 개선하는 작업

<br/><br/>

## 회고

역시 하나를 알려줘도 반도 못떠먹는 나는.. 이번 프로젝트 전체 프로젝트의 tanstack처리를 완료하지 못하고 props 장인이 되어 버렸다.  <br/><br/>
그래도 회원가입 CRUD는 tanstack처리와 zustand 처리도 해서 다행이다.. zustand의 persist는 로컬스토리지에 쉽게 저장 할 수 있는 확장기능인데 확실히 로그인에서 하나하나 스토리지에 저장하다가 저렇게 쓰니까 너무 편했다. <br/><br/>
아아- 상태관리가 이렇게 어려울 줄이야.
토큰 만료 시간도 지정하고 tailwind의 확장 기능도 써보고, 개인 커스텀 폰트 같은 것도 써보긴 했으나 아직 실무에 갈 수는 없는 수준이라 보이기 부끄럽다. 이번 과제가 끝나면 모바일 반응형도 대응 해야하고 test 부분 tanstack처리도 해야하고,
<br/><br/> 바쁘다 바빠-
