import React, { forwardRef } from 'react';

import { StyledHeading } from './StyledHeading';

const Heading = forwardRef(
  (
    {
      color, // munged to avoid styled-components putting it in the DOM
      fill,
      level,
      ...rest
    },
    ref,
  ) => {
    // enforce level to be a number
    return (
      <StyledHeading
        as={`h${level}`}
        colorProp={color}
        fillProp={fill}
        level={+level}
        {...rest}
        ref={ref}
      />
    );
  },
);

Heading.displayName = 'Heading';
Heading.defaultProps = {
  level: 1,
  responsive: true,
};

let HeadingDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  HeadingDoc = require('./doc').doc(Heading);
}
const HeadingWrapper = HeadingDoc || Heading;

export { HeadingWrapper as Heading };
