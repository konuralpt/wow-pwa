import React from 'react';
import Loadable from 'react-loadable';
// import spinner from '@public/assets/spinner.gif';

function Loading() {
  return (
    <div style={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* <img src={spinner} alt="" /> */}
    </div>
  );
}

export default {
  WorldOfWarcraft: Loadable({
    loader: () => import('@app-pages/WorldOfWarcraft'),
    loading: Loading,
  }),
};
