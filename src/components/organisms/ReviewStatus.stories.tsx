import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReviewStatus, ReviewStatusProps } from './ReviewStatus';

export default {
  title: 'organisms/ReviewStatus',
  component: ReviewStatus,
} as Meta;

const Template: Story<ReviewStatusProps> = (args) => <ReviewStatus {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  loading: false,
  reviews: [
    {
      state: 'Approved',
      reviewer: {
        name: '844196',
        iconUrl: 'https://avatars1.githubusercontent.com/u/4990822?s=460&u=8fec370f2cee3ad24811108278916be8d4178ce4&v=4',
      },
    },
    {
      state: 'Approved',
      reviewer: {
        name: 'howyi',
        iconUrl: 'https://avatars3.githubusercontent.com/u/6592938?s=400&u=b7cc3af40411d4cc67b02f3ef27ad8307b07ad4f&v=4',
      },
    },
    {
      state: 'Unreviewed',
      reviewer: {
        name: 'sasairc',
        iconUrl: 'https://avatars3.githubusercontent.com/u/9349287?s=460&u=09b4a1b9141e13b864c3553845d37d952eb6a725&v=4',
      },
    },
    {
      state: 'Unreviewed',
      reviewer: {
        name: 'keepoff07',
        iconUrl: 'https://avatars3.githubusercontent.com/u/5749086?s=460&u=d71d86f81c6f24c3de81e3a4ce774a6922f60e8a&v=4',
      },
    },
    {
      state: 'Unreviewed',
      reviewer: {
        name: 'OsamuMORIMOTO',
        iconUrl: 'https://avatars2.githubusercontent.com/u/7514359?s=460&u=537de7fcac1c93ee5a5ad316f506df1dc7459958&v=4',
      },
    },
  ],
};

export const AllStates = Template.bind({});
AllStates.args = {
  reviews: [
    {
      state: 'Approved',
      reviewer: {
        name: '844196',
        iconUrl: 'https://avatars1.githubusercontent.com/u/4990822?s=460&u=8fec370f2cee3ad24811108278916be8d4178ce4&v=4',
      },
    },
    {
      state: 'LeftComments',
      reviewer: {
        name: 'hyousikinuko',
        iconUrl: 'https://pbs.twimg.com/profile_images/1059053354112798720/GIs8Fwd__400x400.jpg',
      },
    },
    {
      state: 'Approved',
      reviewer: {
        name: 'howyi',
        iconUrl: 'https://avatars3.githubusercontent.com/u/6592938?s=400&u=b7cc3af40411d4cc67b02f3ef27ad8307b07ad4f&v=4',
      },
    },
    {
      state: 'RequestedChanges',
      reviewer: {
        name: 'sasairc',
        iconUrl: 'https://avatars3.githubusercontent.com/u/9349287?s=460&u=09b4a1b9141e13b864c3553845d37d952eb6a725&v=4',
      },
    },
    {
      state: 'LeftComments',
      reviewer: {
        name: 'patipatiniko',
        iconUrl: 'https://pbs.twimg.com/profile_images/867713956722421763/aKqU_zMF_400x400.jpg',
      },
    },
    {
      state: 'LeftComments',
      reviewer: {
        name: 'keepoff07',
        iconUrl: 'https://avatars3.githubusercontent.com/u/5749086?s=460&u=d71d86f81c6f24c3de81e3a4ce774a6922f60e8a&v=4',
      },
    },
    {
      state: 'Unreviewed',
      reviewer: {
        name: 'OsamuMORIMOTO',
        iconUrl: 'https://avatars2.githubusercontent.com/u/7514359?s=460&u=537de7fcac1c93ee5a5ad316f506df1dc7459958&v=4',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  reviews: [],
};

export const NoReviews = Template.bind({});
NoReviews.args = {
  loading: false,
  reviews: [],
};

export const OccurredError = Template.bind({});
OccurredError.args = {
  loading: false,
  error: 'Network Error',
  reviews: [],
};

