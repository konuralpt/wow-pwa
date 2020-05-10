import Loadable from 'react-loadable';
import LoadingSpinner from '@app-components/LoadingSpinner';

export const Sider = Loadable({
  loader: () => import('./Sider'),
  loading: LoadingSpinner,
});

export const Header = Loadable({
  loader: () => import('./Header'),
  loading: LoadingSpinner,
});

export const Footer = Loadable({
  loader: () => import('./Footer'),
  loading: LoadingSpinner,
});
