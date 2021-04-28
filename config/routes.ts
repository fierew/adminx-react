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
  { exact: true,
    path: '/',
    component: 'index',
    name: '首页',
    icon: 'dashboard'
  },
  {
    component: './404',
  },
];
