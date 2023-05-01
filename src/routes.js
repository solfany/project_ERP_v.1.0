// 여기가 사이드바 메뉴 조종
import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';
import Map from 'views/Map.js';
import Notifications from 'views/Notifications.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';

var routes = [
  {
    path: '/dashboard',
    name: '근무일정',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin',
    props: true,
  },
  {
    path: '/icons',
    name: '출퇴근 기록',
    icon: 'tim-icons icon-atom',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/map',
    name: '휴가',
    icon: 'tim-icons icon-pin',
    component: Map,
    layout: '/admin',
  },
  {
    path: '/attendance',
    name: '근태 정산',
    icon: 'tim-icons icon-bell-55',
    component: Attendance,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: '급여 관리',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: '회사 설정',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: '프로필',
    icon: 'tim-icons icon-align-center',
    component: Typography,
    layout: '/admin',
  },
  {
    path: 'www.naver.com',
    name: '메신저',
    icon: 'tim-icons icon-world',
    // component: naver,
    layout: '/naver.com',
  },
  {
    path: 'www.naver.com',
    name: '게시판',
    icon: 'tim-icons icon-world',
    // component: naver,
    layout: '/naver.com',
  },
];
export default routes;
