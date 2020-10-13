import React, { ReactPortal } from 'react';
import { render, createPortal } from 'react-dom';
import { ReviewStatusContainer } from './components/ecosystems/ReviewStatusContainer';

const portals = Array.from(document.querySelectorAll<HTMLElement>('.rows .row')).map((row$) => {
  const prUrl = row$.dataset.prUrl!;
  const el$ = row$.querySelector('.mount-me')!
  return createPortal(<ReviewStatusContainer prUrl={prUrl} />, el$);
});

// 将来的にはここでログイン中Githubユーザ名・拡張機能設定値を集中管理し、Provider経由で下層に配信する
const App = ({ portals }: { portals: ReactPortal[] }) => (
  <>
    {...portals}
  </>
);

render(<App portals={portals} />, document.createElement('div'));
