import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReviewStateSkeleton, ReviewStateSkeletonProps } from './ReviewStateSkeleton';

export default {
  title: 'molecules/ReviewStateSkeleton',
  component: ReviewStateSkeleton,
} as Meta;

const Template: Story<ReviewStateSkeletonProps> = (args) => <ReviewStateSkeleton {...args} />;

export const Sample = Template.bind({});
