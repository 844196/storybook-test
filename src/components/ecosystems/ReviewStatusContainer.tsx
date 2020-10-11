import React from 'react';
import { useFetchReviewStatus } from '../../hooks/useFetchReviewStatus';
import { ReviewStatus } from '../organisms/ReviewStatus';

export interface ReviewStatusContainerProps {
  prUrl: string;
}

export const ReviewStatusContainer: React.FC<ReviewStatusContainerProps> = ({ prUrl }) => {
  const [reviews, { loading, error }] = useFetchReviewStatus(prUrl);
  if (error) {
    console.error(error);
  }
  return (<ReviewStatus loading={loading} error={error} reviews={reviews} />);
};
