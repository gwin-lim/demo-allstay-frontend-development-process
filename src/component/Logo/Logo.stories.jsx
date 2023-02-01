import React from 'react';
import Logo from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    href: {
      control: 'text',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({children, ...rest}) => <Logo {...rest}>{children}</Logo>;

export const ImageOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ImageOnly.args = {
  ...Logo.defaultProps,
  href: '/',
};

export const ShowTitle = Template.bind({});
ShowTitle.args = {
  ...Logo.defaultProps,
  href: '/',
  imageOnly: false,
};
