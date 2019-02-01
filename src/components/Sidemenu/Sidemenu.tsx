/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SVG from '../utils/SVG';
import { ISidemenu } from '../../interfaces';

import './Sidemenu.scss';

import iconCross from '../../assets/svg/cross.svg';
import iconBurger from '../../assets/svg/burger.svg';

const root = document.getElementById('root');

export default class Sidemenu extends Component<ISidemenu, any> {
    public state: any = {
        open: false,
    };

    constructor(props: ISidemenu) {
        super(props);
    }

    private isFunction(functionToCheck: any) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }

    private onOpen = () => {
        const onOpen = this.props.onOpen;
        const onClose = this.props.onClose;
        if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
            onOpen();
        } else {
            this.setState({ open: true });
        }
    }

    private onClose = () => {
        const onOpen = this.props.onOpen;
        const onClose = this.props.onClose;
        if (onOpen && this.isFunction(onOpen) && onClose && this.isFunction(onClose)) {
            onClose();
        } else {
            this.setState({ open: false });
        }
    }

    public render() {
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

        const classes = [
            'AMB-Sidemenu',
            `${open ? 'open' : ''}`,
        ].filter(Boolean);

        const icon = this.props.hasOwnProperty('icon') ? this.props.icon : true;

        return <>
            {icon && <SVG className='AMB-Sidemenu__icon' onClick={this.onOpen} src={this.props.iconSrc || iconBurger} />}
            {open && ReactDOM.createPortal(
                <div className={classes.join(' ').trim()}>
                    <aside>
                        {this.props.header && <header>{this.props.header}</header>}
                        <main>{this.props.children}</main>
                        <footer>
                            <SVG className='close' onClick={this.onClose} src={iconCross} />
                        </footer>
                    </aside>
                    <div className='overlay' onClick={this.onClose}></div>
                </div>, this.props.portal || root)}
        </>;
    }
}
