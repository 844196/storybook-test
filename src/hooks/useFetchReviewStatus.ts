import { useEffect, useState } from 'react';
import { Review, ReviewState } from '../domain/review';

export const useFetchReviewStatus = (prUrl: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const _reviews = await fetchReviewStatus(prUrl);
        setReviews(_reviews);
      } catch (_error) {
        setError(_error);
      } finally {
        setLoading(false);
      }
    })();
  }, [prUrl]);

  return [reviews, { loading, error }] as const;
};

const fetchReviewStatus = async (prUrl: string): Promise<Review[]> => {
  const document$ = await fetch(prUrl, { credentials: 'include' })
    .then((res) => res.text())
    .then((html) => domParser.parseFromString(html, 'text/html'));

  const reviews: Review[] = [];
  document$
    .querySelectorAll<HTMLSpanElement>('.js-issue-sidebar-form [data-assignee-name]')
    .forEach((span$) => {
      const name = span$.dataset.assigneeName;
      if (!name) {
        throw new Error('レビュワーユーザ名の取得に失敗');
      }

      const iconUrl = span$.querySelector('img')?.src;
      if (!iconUrl) {
        throw new Error('レビュワーアイコンURLの取得に失敗');
      }

      const svg$ = span$.nextElementSibling?.querySelector<SVGElement>('.reviewers-status-icon svg');
      const octiconClass = Array.from(svg$?.classList ?? []).find((klass) => klass.startsWith('octicon-')) ?? '';
      const state: ReviewState = OCTICON_CLASS_TO_REVIEW_STATE_MAP[octiconClass];
      if (!state) {
        throw new Error('レビュー状態の取得に失敗');
      }

      reviews.push({ state, reviewer: { name, iconUrl } });
    });

  return reviews;
};

const domParser = new DOMParser();

const OCTICON_CLASS_TO_REVIEW_STATE_MAP: { [key: string]: ReviewState } = {
  'octicon-check': 'Approved',
  'octicon-x': 'RequestedChanges',
  'octicon-comment': 'LeftComments',
  'octicon-primitive-dot': 'Unreviewed',
};
