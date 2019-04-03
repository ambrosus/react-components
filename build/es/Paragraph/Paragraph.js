import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import './Paragraph.scss';

const Paragraph = props => {
  const {
    className,
    content,
    children,
    light
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, ["className", "content", "children", "light"]);

  const classes = ['AMB-Paragraph', className || '', light && 'light' || ''].join(' ').trim();
  const innerHTML = content && {
    __html: content
  } || undefined;
  return React.createElement(React.Fragment, null, innerHTML && React.createElement("p", _extends({
    className: classes
  }, otherProps, {
    dangerouslySetInnerHTML: innerHTML
  })) || React.createElement("p", _extends({
    className: classes
  }, otherProps), children));
};

export default Paragraph;