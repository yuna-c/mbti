# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
