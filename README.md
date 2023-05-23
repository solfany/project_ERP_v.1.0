

```
3팀 웹 개발 프로젝트 

팀명 : 자겸정원
팀장: 김솔비     팀원 :  조정원, 홍준이, 김자겸 

개발기간 : 2023.4.15 ~2023.05.15

1. 설치 방법
- 필수 프로그램 vscode/powerpoint/node.js
- vscode를 실행시킨 후 터미널을 열고 npx create-react-app . 명령어 입력한다.
- project 레퍼지토리의 소스를 내려 받은 후 압축해제한다. 
- 압축해제한 파일을 react-app 폴더에 붙여넣기 한다.
- 터미널에 npm install --force  입력 후 npm start를 하여 실행한다.
- 함께 첨부한  "3조 2차 프로젝트.pdf" 를 실행 



2. 발표 순서
-------intro------------
1. 팀원소개 ~ 메인페이지 개발 -> 김자겸
3. 휴가일정 ~ 메신저   -> 조정원
4. 근무일정 ~ 게시판 -> 홍준이 
5. 근태정산 ~ 후기/시연 -> 김솔비 



3. 폴더구조
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
