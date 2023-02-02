import React from 'react';
import DemoButton from './DemoButton';

const STORY = {
  title: 'Demo/DemoButton',
  component: DemoButton,
  argTypes: {
    disabled: 'boolean',
    children: 'text',
  },
};
export default STORY;

const Template = ({children, ...rest}) => <DemoButton {...rest}>{children}</DemoButton>;

export const Default = Template.bind({});
Default.args = {
  ...DemoButton.defaultProps,
};

export const disabled = Template.bind({});
disabled.args = {
  ...DemoButton.defaultProps,
  disabled: true,
};

export const isLoading = Template.bind({});
isLoading.args = {
  ...DemoButton.defaultProps,
  isLoading: true,
};