import React from 'react';
import { render } from 'react-dom';
import { ReviewStatusContainer } from './components/ecosystems/ReviewStatusContainer';

const row$ = document.getElementById('row')!;

render(
  <ReviewStatusContainer
    prUrl={row$.dataset.prUrl!}
    rowDom={row$}
    loginUsername="844196"
  />,
  document.getElementById('app')
);
