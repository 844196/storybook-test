import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReviewerIcon, ReviewerIconProps } from './ReviewerIcon';

export default {
  title: 'atoms/ReviewerIcon',
  component: ReviewerIcon,
} as Meta;

const Template: Story<ReviewerIconProps> = (args) => <ReviewerIcon {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  src: 'https://avatars1.githubusercontent.com/u/4990822?s=460&u=8fec370f2cee3ad24811108278916be8d4178ce4&v=4',
};
