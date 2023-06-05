


# 웹 개발 프로젝트 
![1](https://github.com/solfany/project02/assets/123814718/47b8ff88-9a82-4a7b-abbb-d89fa5ea7374)



팀명: 자겸정원
팀장: 김솔비
팀원: 조정원, 홍준이, 김자겸

개발 기간: 2023.4.15 ~ 2023.05.15


# 주제
![3](https://github.com/solfany/project02/assets/123814718/0235f6fe-ab4e-48d6-a584-833860f66e4d)



## **1. 설치 방법**

다음은 프로젝트를 설치하는 단계별 지침입니다.

### **1.1 필수 프로그램 설치**

먼저 다음의 필수 프로그램을 설치해야 합니다:

- Visual Studio Code (vscode)
- Microsoft PowerPoint
- Node.js

### **1.2 프로젝트 설정**

1. Visual Studio Code(vscode)를 실행한 후 터미널을 엽니다.
2. 터미널에서 다음 명령어를 입력하여 React 프로젝트를 생성합니다:
    
    ```
    npx create-react-app .
    ```
    
3. 프로젝트 레포지토리에서 제공하는 소스 코드를 내려받은 후 압축을 해제합니다.
4. 압축 해제한 파일을 **`react-app`** 폴더에 복사합니다.

### **1.3 종속성 설치 및 실행**

1. 터미널에서 다음 명령어를 입력하여 종속성을 설치합니다:
    
    ```
    npm install --force
    ```
    
2. 설치가 완료되면 다음 명령어로 프로젝트를 실행합니다:
    
    ```
    npm start
    ```
    

### **1.4 프로젝트 문서 실행**

- 함께 첨부한 "3조 2차 프로젝트.pdf" 파일을 실행하여 프로젝트 문서를 확인할 수 있습니다.

위의 단계를 차례로 따라하면 프로젝트를 설치하고 실행할 수 있습니다.



## 2. 개발 환경 
![17](https://github.com/solfany/project02/assets/123814718/4efb45eb-874f-4f1d-a32a-00de8e6644d8)




## 3. React npm List
![18](https://github.com/solfany/project02/assets/123814718/ceeee03b-6f78-4207-95c8-9cdbbefe5a9a)



## 4. 사전 설계 
![21](https://github.com/solfany/project02/assets/123814718/7c6d7fee-78d6-45ea-80cb-f08dd000080d)


## 5. 주요 기술 
![26](https://github.com/solfany/project02/assets/123814718/18c759c8-f059-48af-819d-6ece41246725)


## 6. 아키텍쳐 설계도 
> doc 폴더에서 확인 가능 합니다. 


## 7. 와이어 프레임
![16](https://github.com/solfany/project02/assets/123814718/cad3e748-4ac8-4d9e-9e3e-9ade0759281b)





## 8. 발표 순서
-------intro------------
1. 팀원소개 ~ 메인페이지 개발 -> 김자겸
3. 휴가일정 ~ 메신저   -> 조정원
4. 근무일정 ~ 게시판 -> 홍준이 
5. 근태정산 ~ 후기/시연 -> 김솔비 



## 9. 폴더구조
프로젝트 02의 폴더 구조는 다음과 같습니다:

- .DS_Store: Mac 운영 체제에서 폴더의 뷰 옵션을 저장하는 파일입니다.
- .env: 프로젝트의 환경 변수 설정 파일입니다.
- .git: Git 저장소 관련 파일이 위치한 폴더입니다.
    - COMMIT_EDITMSG: 커밋 메시지를 작성하는 파일입니다.
    - config: Git 설정 파일입니다.
    - description: Git 저장소에 대한 설명이 포함된 파일입니다.
    - FETCH_HEAD: 최근에 가져온 브랜치와 커밋 정보가 저장된 파일입니다.
    - HEAD: 현재 작업 중인 브랜치를 가리키는 파일입니다.
    - hooks: Git 훅 스크립트가 위치한 폴더입니다.
    - index: Git이 추적하는 파일과 커밋의 스냅샷 정보가 저장된 파일입니다.
    - info: Git 저장소 정보가 포함된 폴더입니다.
    - logs: Git 로그 파일이 위치한 폴더입니다.
    - objects: Git 객체 파일이 저장된 폴더입니다.
    - refs: Git 참조(브랜치, 태그 등) 파일이 저장된 폴더입니다.
- .gitignore: Git으로 추적하지 않을 파일 및 폴더 목록을 지정하는 파일입니다.
- Documentation: 프로젝트 문서 파일이 위치한 폴더입니다.
- gulpfile.js: Gulp 빌드 도구 설정 파일입니다.
- jsconfig.json: JavaScript 프로젝트 설정 파일입니다.
- package.json: 프로젝트의 종속성 및 스크립트 정보가 포함된 파일입니다.
- public: 정적 파일이 위치하는 폴더입니다.
    - apple-icon.png: 애플 아이콘 이미지 파일입니다.
    - favicon.png: 웹 사이트의 파비콘 이미지 파일입니다.
    - img: 이미지 파일이 위치하는 폴더입니다.
    - index.html: 프로젝트의 메인 HTML 파일입니다.
    - manifest.json: 웹 앱 매니페스트 파일입니다.
- README.md: 프로젝트에 대한 설명이 포함된 마크다운 파일입니다.
- src: 소스 코드가 위치하는 폴더입니다.
    - actions.js: Redux 액션 관련 JavaScript 파일입니다.
    - assets: 자원 파일이 위치하는 폴더입니다.
    - components: 리액트 컴포넌트 파일이 위치하는 폴더입니다.

프로젝트의 폴더 구조는 파일 및 폴더의 역할에 따라 구분되어 있으며, 주로 소스 코드, 정적 파일, 문서 등이 해당 폴더에 위치하고 있습니다.
```
project02
├─ .DS_Store
├─ .env
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ master
│  ├─ info
│  │  └─ pack
│  │     ├─ pack-0c583c1430e03b09fac377f506154e327549c3e3.idx
│  │     ├─ pack-0c583c1430e03b09fac377f506154e327549c3e3.pack
│  │     ├─ pack-6e44be8eec32357e3ef92249c42e7567364cc1c1.idx
│  │     ├─ pack-6e44be8eec32357e3ef92249c42e7567364cc1c1.pack
│  │     ├─ pack-72468322388de60a9e307c5528ea80beec71d707.idx
│  │     └─ pack-72468322388de60a9e307c5528ea80beec71d707.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ Documentation
│  └─ documentation.html
├─ gulpfile.js
├─ jsconfig.json
├─ package.json
├─ public
│  ├─ apple-icon.png
│  ├─ favicon.png
│  ├─ img
│  │  └─ default-avatar.png
│  ├─ index.html
│  └─ manifest.json
├─ README.md
├─ src
│  ├─ .DS_Store
│  ├─ actions.js
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ nucleo-icons.css
│  │  │  └─ styles.css
│  │  ├─ fonts
│  │  │  ├─ NanumGothic-Regular.ttf
│  │  │  ├─ nucleo.eot
│  │  │  ├─ nucleo.ttf
│  │  │  ├─ nucleo.woff
│  │  │  └─ nucleo.woff2
│  │  ├─ img
│  │  │  ├─ anime3.png
│  │  │  ├─ anime6.png
│  │  │  ├─ apple-icon.png
│  │  │  ├─ asdf.jpg
│  │  │  ├─ bg5.jpg
│  │  │  ├─ default-avatar.png
│  │  │  ├─ emilyz.jpg
│  │  │  ├─ favicon.png
│  │  │  ├─ header.jpg
│  │  │  ├─ hiclipart.com (1).png
│  │  │  ├─ img_3115.jpg
│  │  │  ├─ james.jpg
│  │  │  ├─ mike.jpg
│  │  │  ├─ react-logo.png
│  │  │  └─ unknown.png
│  │  └─ scss
│  │     ├─ black-dashboard-react
│  │     │  ├─ custom
│  │     │  │  ├─ cards
│  │     │  │  │  ├─ _card-chart.scss
│  │     │  │  │  ├─ _card-map.scss
│  │     │  │  │  ├─ _card-plain.scss
│  │     │  │  │  ├─ _card-task.scss
│  │     │  │  │  └─ _card-user.scss
│  │     │  │  ├─ mixins
│  │     │  │  │  ├─ opacity.scss
│  │     │  │  │  ├─ _alert.scss
│  │     │  │  │  ├─ _background-variant.scss
│  │     │  │  │  ├─ _badges.scss
│  │     │  │  │  ├─ _buttons.scss
│  │     │  │  │  ├─ _dropdown.scss
│  │     │  │  │  ├─ _forms.scss
│  │     │  │  │  ├─ _icon.scss
│  │     │  │  │  ├─ _inputs.scss
│  │     │  │  │  ├─ _modals.scss
│  │     │  │  │  ├─ _page-header.scss
│  │     │  │  │  ├─ _popovers.scss
│  │     │  │  │  ├─ _vendor-prefixes.scss
│  │     │  │  │  └─ _wizard.scss
│  │     │  │  ├─ utilities
│  │     │  │  │  ├─ _backgrounds.scss
│  │     │  │  │  ├─ _floating.scss
│  │     │  │  │  ├─ _helper.scss
│  │     │  │  │  ├─ _position.scss
│  │     │  │  │  ├─ _shadows.scss
│  │     │  │  │  ├─ _sizing.scss
│  │     │  │  │  ├─ _spacing.scss
│  │     │  │  │  ├─ _text.scss
│  │     │  │  │  └─ _transform.scss
│  │     │  │  ├─ vendor
│  │     │  │  │  ├─ _plugin-perfect-scrollbar.scss
│  │     │  │  │  └─ _plugin-react-notification-alert.scss
│  │     │  │  ├─ _alerts.scss
│  │     │  │  ├─ _badges.scss
│  │     │  │  ├─ _buttons.scss
│  │     │  │  ├─ _card.scss
│  │     │  │  ├─ _checkboxes-radio.scss
│  │     │  │  ├─ _dropdown.scss
│  │     │  │  ├─ _fixed-plugin.scss
│  │     │  │  ├─ _footer.scss
│  │     │  │  ├─ _forms.scss
│  │     │  │  ├─ _functions.scss
│  │     │  │  ├─ _images.scss
│  │     │  │  ├─ _input-group.scss
│  │     │  │  ├─ _misc.scss
│  │     │  │  ├─ _mixins.scss
│  │     │  │  ├─ _modal.scss
│  │     │  │  ├─ _navbar.scss
│  │     │  │  ├─ _rtl.scss
│  │     │  │  ├─ _sidebar-and-main-panel.scss
│  │     │  │  ├─ _tables.scss
│  │     │  │  ├─ _type.scss
│  │     │  │  ├─ _utilities.scss
│  │     │  │  ├─ _variables.scss
│  │     │  │  └─ _white-content.scss
│  │     │  └─ react-differences
│  │     │     ├─ react-differences.scss
│  │     │     └─ _inputs.scss
│  │     └─ black-dashboard-react.scss
│  ├─ components
│  │  ├─ Attendance
│  │  │  ├─ Attendance.css
│  │  │  ├─ AttendanceInput.js
│  │  │  ├─ AttendCalendar.css
│  │  │  ├─ AttendCalendar.js
│  │  │  ├─ CheckButton.css
│  │  │  ├─ CheckButton.js
│  │  │  ├─ Clock.js
│  │  │  ├─ EmployeeData.js
│  │  │  ├─ EmployeeTable.css
│  │  │  ├─ Welcome.css
│  │  │  └─ Welcome.js
│  │  ├─ BackgroundColorWrapper
│  │  │  └─ BackgroundColorWrapper.js
│  │  ├─ Bulletin
│  │  │  ├─ Bulletin.css
│  │  │  ├─ comments
│  │  │  │  ├─ Comment.js
│  │  │  │  ├─ CommentEditor.js
│  │  │  │  └─ CommentForm.js
│  │  │  ├─ Editor
│  │  │  │  ├─ editor.css
│  │  │  │  ├─ EditorEditor.js
│  │  │  │  └─ QuillEditor.js
│  │  │  ├─ Notification
│  │  │  │  ├─ comments
│  │  │  │  │  ├─ Comment.js
│  │  │  │  │  ├─ CommentEditor.js
│  │  │  │  │  └─ CommentForm.js
│  │  │  │  ├─ Notice.js
│  │  │  │  ├─ NoticeEditor.js
│  │  │  │  ├─ NoticeFactory.js
│  │  │  │  ├─ NoticeOption.js
│  │  │  │  ├─ NoticePage.js
│  │  │  │  ├─ NoticeScope.js
│  │  │  │  └─ Option
│  │  │  │     ├─ DeleteOption.js
│  │  │  │     ├─ EditOption.js
│  │  │  │     ├─ ReplyOption.js
│  │  │  │     └─ ScopeOption.js
│  │  │  ├─ Option
│  │  │  │  ├─ DeleteOption.js
│  │  │  │  ├─ EditOption.js
│  │  │  │  ├─ ReplyOption.js
│  │  │  │  └─ ScopeOption.js
│  │  │  ├─ Profile.js
│  │  │  ├─ Route
│  │  │  │  ├─ Notification.js
│  │  │  │  └─ Unknown.js
│  │  │  ├─ Tabs
│  │  │  │  ├─ BulletinTab.css
│  │  │  │  └─ BulletinTab.js
│  │  │  └─ Unknown
│  │  │     ├─ Factory.js
│  │  │     ├─ Text.js
│  │  │     ├─ TextEditor.js
│  │  │     ├─ TextOption.js
│  │  │     ├─ TextPage.js
│  │  │     └─ TextScope.js
│  │  ├─ Button
│  │  │  ├─ Button.css
│  │  │  └─ CustomButton.js
│  │  ├─ Calendar
│  │  │  ├─ calen.css
│  │  │  ├─ calendar.css
│  │  │  ├─ Calendar.js
│  │  │  ├─ calendar2.css
│  │  │  └─ events.js
│  │  ├─ CalendarModal
│  │  │  ├─ DeleteModal.js
│  │  │  ├─ modal.css
│  │  │  └─ RunModal.js
│  │  ├─ Chatting
│  │  │  ├─ Chat.css
│  │  │  ├─ Chat.js
│  │  │  ├─ SendMessage.js
│  │  │  ├─ SignIn.js
│  │  │  └─ Signout.js
│  │  ├─ Employee-group
│  │  │  ├─ 001.js
│  │  │  ├─ 002.js
│  │  │  ├─ 003.js
│  │  │  ├─ Employee.js
│  │  │  ├─ EmployeeModal.js
│  │  │  ├─ inputNumberFormat.js
│  │  │  ├─ toolStyle.css
│  │  │  └─ Tooltip.js
│  │  ├─ FixedPlugin
│  │  │  └─ FixedPlugin.js
│  │  ├─ Footer
│  │  │  └─ Footer.js
│  │  ├─ Loader
│  │  │  └─ Loader.js
│  │  ├─ login
│  │  │  ├─ Auth.css
│  │  │  ├─ Auth.js
│  │  │  ├─ Navigation.js
│  │  │  ├─ Profile.js
│  │  │  └─ Router.js
│  │  ├─ Navbars
│  │  │  ├─ AdminNavbar.js
│  │  │  ├─ RTLNavbar.js
│  │  │  └─ 로고1.jpg
│  │  ├─ Sidebar
│  │  │  └─ Sidebar.js
│  │  ├─ Signup
│  │  │  └─ Signup.js
│  │  ├─ ThemeWrapper
│  │  │  └─ ThemeWrapper.js
│  │  ├─ Userlist-group
│  │  │  ├─ getThisMonth.js
│  │  │  ├─ listStyle.css
│  │  │  ├─ TableToExcel.js
│  │  │  ├─ TotalExcel.js
│  │  │  └─ Userlist.js
│  │  └─ Vacation
│  │     ├─ FixModal.js
│  │     ├─ Map.css
│  │     ├─ MapArray.js
│  │     └─ VacationModal.js
│  ├─ contexts
│  │  ├─ BackgroundColorContext.js
│  │  └─ ThemeContext.js
│  ├─ FBase.js
│  ├─ index.js
│  ├─ layouts
│  │  ├─ Admin
│  │  │  └─ Admin.js
│  │  └─ RTL
│  │     └─ RTL.js
│  ├─ Loginbase.js
│  ├─ logo.svg
│  ├─ routes.js
│  ├─ store.js
│  ├─ style
│  │  └─ Employee-nav.css
│  ├─ variables
│  │  └─ charts.js
│  └─ views
│     ├─ .DS_Store
│     ├─ Attendance.js
│     ├─ AttendanceManagement.js
│     ├─ Bulletin.js
│     ├─ Dashboard.js
│     ├─ Main.js
│     ├─ MainLogin.js
│     ├─ Map.js
│     ├─ Payroll.js
│     ├─ RealChat.js
│     ├─ Rtl.js
│     ├─ SendMessage.js
│     ├─ TableList.js
│     ├─ Typography.js
│     └─ UserProfile.js
└─ variables
   └─ charts.js



```
