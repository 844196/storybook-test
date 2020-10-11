import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReviewStateIndicator, ReviewStateIndicatorProps } from './ReviewStateIndicator';

export default {
  title: 'atoms/ReviewStateIndicator',
  component: ReviewStateIndicator,
} as Meta;

const Template: Story<ReviewStateIndicatorProps> = (args) => <ReviewStateIndicator {...args} />;

export const Sample = Template.bind({});
Sample.args = { state: 'Approved' };
