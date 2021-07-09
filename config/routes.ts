export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'dashboard',
    routes: [
      {
        name: '用户管理',
        path: '/system/user',
        component: './system/User',
        icon: 'dashboard',
      },
      {
        name: '角色管理',
        path: '/system/role',
        component: './system/Role',
      },
      {
        name: '菜单管理',
        path: '/system/menu',
        component: './system/Menu',
      },
      {
        name: '部门管理',
        path: '/system/dept',
        component: './system/Dept',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
