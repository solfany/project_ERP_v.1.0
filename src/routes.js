import Dashboard from "views/Dashboard.js";
// 여기가 사이드바 메뉴 조종
import Main from "views/Main";
import MainLogin from "views/MainLogin";
import AttendanceManagement from "views/AttendanceManagement.js";
import Map from "views/Map.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Bulletin from "views/Bulletin.js";
import Chat from "views/Chat";
import RealChat from "views/RealChat";
import Attendance from "views/Attendance";
import Payroll from "views/Payroll";

var routes = [
  {
    path: "/Main",
    name: "홈",
    icon: "tim-icons icon-chart-pie-36",
    component: Main,
    layout: "/admin",
    props: true,
  },

  {
    path: "/dashboard",
    name: "근무일정",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    props: true,
  },
  {
    path: "/attendanceManagement",
    name: "출퇴근 기록",
    icon: "tim-icons icon-atom",
    component: AttendanceManagement,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "휴가",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/attendance",
    name: "근태 정산",
    icon: "tim-icons icon-bell-55",
    component: Attendance,
    layout: "/admin",
  },
  {
    path: "/payroll",
    name: "급여 관리",
    icon: "tim-icons icon-single-02",
    component: Payroll,
    layout: "/admin",
  },
  {
    path: '/Signup',
    name: '회사 관리',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin',
  },
  {
    path: "/typography",
    name: "프로필",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/Chat",
    name: "메신저",
    icon: "tim-icons icon-spaceship",
    component: RealChat,
    layout: "/admin",
  },
  {
    path: "/bulletin",
    name: "게시판",
    icon: "tim-icons icon-paper",
    component: Bulletin,
    layout: "/admin",
    props: true,
  },
  {
    path: '/MainLogin',
    component: MainLogin,
    layout: '/admin',
    props: true,
  },
];
export default routes;

