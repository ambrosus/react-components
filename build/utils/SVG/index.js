"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
var SVG = function SVG(props) {
  var src = props.src,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["src"]);
  var Wrapper = props.wrapper || 'span';
  return _react.default.createElement(Wrapper, (0, _extends2.default)({}, otherProps, {
    dangerouslySetInnerHTML: {
      __html: src
    }
  }));
};

var _default = SVG;
exports.default = _default;