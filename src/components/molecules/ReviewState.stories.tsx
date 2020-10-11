import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReviewState, ReviewStateProps } from './ReviewState';

export default {
  title: 'molecules/ReviewState',
  component: ReviewState,
} as Meta;

const Template: Story<ReviewStateProps> = (args) => <ReviewState {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  state: 'Approved',
  reviewers: [
    {
      name: '844196',
      iconUrl: 'https://avatars1.githubusercontent.com/u/4990822?s=460&u=8fec370f2cee3ad24811108278916be8d4178ce4&v=4',
    },
    {
      name: 'howyi',
      iconUrl: 'https://avatars3.githubusercontent.com/u/6592938?s=400&u=b7cc3af40411d4cc67b02f3ef27ad8307b07ad4f&v=4',
    },
  ],
};

