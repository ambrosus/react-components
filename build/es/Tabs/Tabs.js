/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabListRef = void 0;

    this.onClickTabItem = (event, label) => {
      this.calcLine(event, event.currentTarget);
      this.setState({
        active: label
      });
    };

    this.calcLine = (event, activeChild = null) => {
      if (!activeChild) {
        const children = Array.from(this.tabListRef.current.children);
        activeChild = children.find(child => child.classList.contains('active'));
      }

      const parentElement = activeChild.parentElement;
      const parentX = parentElement.getBoundingClientRect().x;
      const {
        x,
        width
      } = activeChild.getBoundingClientRect();
      const header = parentElement.parentElement;
      header.scrollLeft = x;
      this.setState({
        line: {
          width,
          left: x - parentX
        }
      });
    };

    this.tabListRef = React.createRef();

    const _children = Array.isArray(this.props.children) && this.props.children || [this.props.children].filter(Boolean);

    let active = _children.find(child => child.props.active && !child.props.disabled) || _children[0] || {
      props: {}
    };
    let index = this.props.active || 0;
    index = index > _children.length - 1 ? 0 : index;
    const activeFromParent = _children[index];
    active = !activeFromParent.props.disabled && activeFromParent.props.label || active.props.label;
    this.state = {
      active,
      loaded: false,
      line: {
        left: 0,
        width: 0
      }
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
    this.calcLine();
    window.addEventListener('resize', this.calcLine);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcLine);
  }

  render() {
    const line = this.state.line;
    const children = Array.isArray(this.props.children) && this.props.children || [this.props.children].filter(Boolean);
    return React.createElement("div", {
      className: `AMB-Tabs ${this.props.light ? 'light' : ''}`.trim()
    }, React.createElement("header", null, React.createElement("div", {
      className: "tabList",
      ref: this.tabListRef
    }, children.map(child => React.createElement("button", {
      key: child.props.label,
      type: "button",
      className: `tab ${child.props.label === this.state.active ? 'active' : ''}`.trim(),
      onClick: e => this.onClickTabItem(e, child.props.label),
      disabled: child.props.disabled
    }, child.props.label))), this.state.loaded && React.createElement("span", {
      className: "line",
      style: {
        left: line.left,
        width: line.width
      }
    })), React.createElement("div", {
      className: "tabContent"
    }, children.map(child => child.props.label === this.state.active && child.props.children)));
  }

}

export default Tabs;