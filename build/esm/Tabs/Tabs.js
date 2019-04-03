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
import './Tabs.scss';

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.tabListRef = void 0;

    _this.onClickTabItem = function (event, label) {
      _this.calcLine(event, event.currentTarget);

      _this.setState({
        active: label
      });
    };

    _this.calcLine = function (event) {
      var activeChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!activeChild) {
        var children = Array.from(_this.tabListRef.current.children);
        activeChild = children.find(function (child) {
          return child.classList.contains('active');
        });
      }

      var parentElement = activeChild.parentElement;
      var parentX = parentElement.getBoundingClientRect().x;

      var _activeChild$getBound = activeChild.getBoundingClientRect(),
          x = _activeChild$getBound.x,
          width = _activeChild$getBound.width;

      var header = parentElement.parentElement;
      header.scrollLeft = x;

      _this.setState({
        line: {
          width: width,
          left: x - parentX
        }
      });
    };

    _this.tabListRef = React.createRef();

    var _children = Array.isArray(_this.props.children) && _this.props.children || [_this.props.children].filter(Boolean);

    var active = _children.find(function (child) {
      return child.props.active && !child.props.disabled;
    }) || _children[0] || {
      props: {}
    };
    var index = _this.props.active || 0;
    index = index > _children.length - 1 ? 0 : index;
    var activeFromParent = _children[index];
    active = !activeFromParent.props.disabled && activeFromParent.props.label || active.props.label;
    _this.state = {
      active: active,
      loaded: false,
      line: {
        left: 0,
        width: 0
      }
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
      this.calcLine();
      window.addEventListener('resize', this.calcLine);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calcLine);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var line = this.state.line;
      var children = Array.isArray(this.props.children) && this.props.children || [this.props.children].filter(Boolean);
      return React.createElement("div", {
        className: "AMB-Tabs ".concat(this.props.light ? 'light' : '').trim()
      }, React.createElement("header", null, React.createElement("div", {
        className: "tabList",
        ref: this.tabListRef
      }, children.map(function (child) {
        return React.createElement("button", {
          key: child.props.label,
          type: "button",
          className: "tab ".concat(child.props.label === _this2.state.active ? 'active' : '').trim(),
          onClick: function onClick(e) {
            return _this2.onClickTabItem(e, child.props.label);
          },
          disabled: child.props.disabled
        }, child.props.label);
      })), this.state.loaded && React.createElement("span", {
        className: "line",
        style: {
          left: line.left,
          width: line.width
        }
      })), React.createElement("div", {
        className: "tabContent"
      }, children.map(function (child) {
        return child.props.label === _this2.state.active && child.props.children;
      })));
    }
  }]);

  return Tabs;
}(Component);

export default Tabs;