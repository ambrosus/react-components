import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SVG from '../utils/SVG';
import './Sidemenu.scss';
import iconCross from '../../assets/svg/cross.svg';
import iconBurger from '../../assets/svg/burger.svg';
var root = document.getElementById('root');

var Sidemenu =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidemenu, _Component);

  function Sidemenu(props) {
    var _this;

    _classCallCheck(this, Sidemenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidemenu).call(this, props));
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

  _createClass(Sidemenu, [{
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
      return React.createElement(React.Fragment, null, icon && React.createElement(SVG, {
        className: "AMB-Sidemenu__icon",
        onClick: this.onOpen,
        src: this.props.iconSrc || iconBurger
      }), open && ReactDOM.createPortal(React.createElement("div", {
        className: classes.join(' ').trim()
      }, React.createElement("aside", null, this.props.header && React.createElement("header", null, this.props.header), React.createElement("main", null, this.props.children), React.createElement("footer", null, React.createElement(SVG, {
        className: "close",
        onClick: this.onClose,
        src: iconCross
      }))), React.createElement("div", {
        className: "overlay",
        onClick: this.onClose
      })), this.props.portal || root));
    }
  }]);

  return Sidemenu;
}(Component);

export { Sidemenu as default };