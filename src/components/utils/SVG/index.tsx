import React from 'react';
import { ISVG } from '../../../interfaces';

const SVG = (props: ISVG) => {
  const { src, className, ...otherProps } = props;

  const Wrapper = props.wrapper || 'span';

  return <Wrapper {...otherProps} className={className} dangerouslySetInnerHTML={{ __html: src }}></Wrapper>;
};

export default SVG;
