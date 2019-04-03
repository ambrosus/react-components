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
const root = document.getElementById('root');
export default class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.onOpen = () => {
      const onOpen = this.props.onOpen;
      const onClose = this.props.onClose;

      if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
        onOpen();
      } else {
        this.setState({
          open: true
        });
      }
    };

    this.onClose = () => {
      const onOpen = this.props.onOpen;
      const onClose = this.props.onClose;

      if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
        onClose();
      } else {
        this.setState({
          open: false
        });
      }
    };
  }

  isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }

  render() {
    let open = this.state.open;
    const onOpen = this.props.onOpen;
    const onClose = this.props.onClose;

    if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
      open = this.props.open;
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    const classes = ['AMB-Sidemenu', `${open ? 'open' : ''}`].filter(Boolean);
    const icon = this.props.hasOwnProperty('icon') ? this.props.icon : true;
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

}