"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _SVG = _interopRequireDefault(require("../utils/SVG"));

require("./Sidemenu.scss");

var _cross = _interopRequireDefault(require("../../assets/svg/cross.svg"));

var _burger = _interopRequireDefault(require("../../assets/svg/burger.svg"));

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
var root = document.getElementById('root');

var Sidemenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Sidemenu, _Component);

  function Sidemenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Sidemenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sidemenu).call(this, props));
    _this.state = {
      open: false
    };

    _this.onOpen = function () {
      var onOpen = _this.props.onOpen;
      var onClose = _this.props.onClose;

      if (onOpen && _this.isFunction(onOpen) && onClose && _this.isFunction(onClose)) {
        onOpen();
      } else {
        _this.setState({
          open: true
        });
      }
    };

    _this.onClose = function () {
      var onOpen = _this.props.onOpen;
      var onClose = _this.props.onClose;

      if (onOpen && _this.isFunction(onOpen) && onClose && _this.isFunction(onClose)) {
        onClose();
      } else {
        _this.setState({
          open: false
        });
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Sidemenu, [{
    key: "isFunction",
    value: function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var onOpen = this.props.onOpen;
      var onClose = this.props.onClose;

      if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
        open = this.props.open;
      }

      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.removeProperty('overflow');
      }

      var classes = ['AMB-Sidemenu', "".concat(open ? 'open' : '')].filter(Boolean);
      var icon = this.props.hasOwnProperty('icon') ? this.props.icon : true;
      return _react.default.createElement(_react.default.Fragment, null, icon && _react.default.createElement(_SVG.default, {
        className: "AMB-Sidemenu__icon",
        onClick: this.onOpen,
        src: this.props.iconSrc || _burger.default
      }), open && _reactDom.default.createPortal(_react.default.createElement("div", {
        className: classes.join(' ').trim()
      }, _react.default.createElement("aside", null, this.props.header && _react.default.createElement("header", null, this.props.header), _react.default.createElement("main", null, this.props.children), _react.default.createElement("footer", null, _react.default.createElement(_SVG.default, {
        className: "close",
        onClick: this.onClose,
        src: _cross.default
      }))), _react.default.createElement("div", {
        className: "overlay",
        onClick: this.onClose
      })), this.props.portal || root));
    }
  }]);
  return Sidemenu;
}(_react.Component);

exports.default = Sidemenu;