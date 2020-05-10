import pageList from './pageListAsync';

const routes = [
  {
    path: '/wow',
    name: 'WORLD_OF_WARCRAFT',
    component: pageList.WorldOfWarcraft,
    exact: true,
  },
];

export default routes;
