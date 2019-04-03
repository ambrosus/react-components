"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./Paragraph.scss");

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
var Paragraph = function Paragraph(props) {
  var className = props.className,
      content = props.content,
      children = props.children,
      light = props.light,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["className", "content", "children", "light"]);
  var classes = ['AMB-Paragraph', className || '', light && 'light' || ''].join(' ').trim();
  var innerHTML = content && {
    __html: content
  } || undefined;
  return _react.default.createElement(_react.default.Fragment, null, innerHTML && _react.default.createElement("p", (0, _extends2.default)({
    className: classes
  }, otherProps, {
    dangerouslySetInnerHTML: innerHTML
  })) || _react.default.createElement("p", (0, _extends2.default)({
    className: classes
  }, otherProps), children));
};

var _default = Paragraph;
exports.default = _default;