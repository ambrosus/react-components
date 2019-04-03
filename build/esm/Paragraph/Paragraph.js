import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import './Paragraph.scss';

var Paragraph = function Paragraph(props) {
  var className = props.className,
      content = props.content,
      children = props.children,
      light = props.light,
      otherProps = _objectWithoutProperties(props, ["className", "content", "children", "light"]);

  var classes = ['AMB-Paragraph', className || '', light && 'light' || ''].join(' ').trim();
  var innerHTML = content && {
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