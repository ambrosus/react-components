import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SVG } from '../';
import { IDropDown } from '../../interfaces';

import './DropDown.scss';
import { disableScroll, enableScroll } from '../utils';

const modalRoot: any = document.getElementById('modal-root');

export default class DropDown extends Component<IDropDown, any> {
    public state: any = {
        open: false,
        mobile: false,
        class: '',
    };
    private item: any;
    private nav: any;
    private menu: any;
    private mouseIn = false;
    private scrollableDist = 0;
    private exitTimeout: any;
    private defaultMaxWidth = 200;

    constructor(props: IDropDown) {
        super(props);
    }

    public shouldComponentUpdate(nextProps: IDropDown) {
        return nextProps.open !== false;
    }

    public componentWillUnmount() {
        clearTimeout(this.exitTimeout);
        enableScroll(this.freezeScroll, true);
        window.removeEventListener('click', this.handleClickOutside);
        window.removeEventListener('resize', this.resize);
    }

    public calculateStyles = () => {
        const { open } = this.props;
        const mobile = window.innerWidth <= 1024;
        const style: any = {};

        if (
            (open || this.state.open) &&
            (this.nav && this.nav.getBoundingClientRect) &&
            (this.item && this.item.getBoundingClientRect)
        ) {
            const { height: navHeight, width: navWidth } = this.nav.getBoundingClientRect();
            const { height, y, width, x } = this.item.getBoundingClientRect();
            const offset = 7;

            style.maxHeight = navHeight;
            style.maxWidth = this.props.maxWidth || this.defaultMaxWidth;

            if (mobile) {
                style.left = 0;
                style.right = 0;
                style.bottom = 55;
                style.maxHeight = '100%';
                style.maxWidth = '100%';

                if (window.innerHeight - 55 - navHeight <= 0) {
                    style.top = 0;
                } else {
                    style.top = 'unset';
                }
            } else {
                const ww = window.innerWidth;
                const wh = window.innerHeight;
                let position: any = undefined;

                // Right and left
                if (ww - x - navWidth < 0) {
                    style.right = ww - x - width;
                } else {
                    style.left = x;
                }

                // Top and bottom
                const itemBottom = wh - y - height - offset;
                const itemLeftBottom = wh - y;
                const itemLeftTop = y + height;
                const itemTop = y - offset;

                if (itemBottom - navHeight > 0) {
                    style.top = y + height + offset;
                    position = 'bottom';
                }

                if (
                    !position &&
                    (
                        itemLeftBottom - navHeight >= 0 ||
                        itemLeftTop - navHeight >= 0 ||
                        itemLeftBottom >= itemTop ||
                        itemLeftTop >= itemTop
                    )
                ) {
                    style.top = itemLeftBottom >= itemLeftTop && y || y - offset - navHeight;
                    style.right = ww - x - width;
                    delete style.left;
                    position = 'left';
                }

                if (!position) {
                    style.top = y - offset - navHeight;
                }

                if (wh - style.top - navHeight <= 0) {
                    style.bottom = 0;
                }
            }

            style.top = style.top < 0 ? 0 : style.top;

            if (window.innerHeight < navHeight) {
                style.bottom = 0;
            }
        }

        if (
            !this.state.style ||
            this.state.style.top !== style.top ||
            this.state.style.bottom !== style.bottom ||
            this.state.style.left !== style.left ||
            this.state.style.right !== style.right
        ) {
            this.setState({ style });
        }
    }

    public resize = () => {
        this.setState({ mobile: window.innerWidth <= 1024 });

        this.calculateStyles();
    }

    private handleClickOutside = (event: any) => {
        const { open } = this.props;

        const o = open || this.state.open;

        try {
            if (o && this.nav && !this.nav.contains(event.target) && this.item && !this.item.contains(event.target)) {
                this.onClose();
            }
            // tslint:disable-next-line:no-empty
        } catch (error) { }
    }

    public componentDidUpdate() {
        const { open } = this.props;

        this.calculateStyles();

        if (open || this.state.open) {
            disableScroll(this.freezeScroll, true);
        }
    }

    private onOpen = () => {
        clearTimeout(this.exitTimeout);

        window.addEventListener('click', this.handleClickOutside);
        window.addEventListener('resize', this.resize);

        this.setState({
            open: true,
            mobile: window.innerWidth <= 1024,
            style: {},
        });

        if (this.props.onOpen) {
            this.props.onOpen();
        }

        setTimeout(() => {
            this.setState({ class: 'enter' });
        }, 0);
    }

    private onClose = () => {
        this.setState({ class: '' });

        if (this.props.onClose) {
            this.props.onClose();
        }

        this.exitTimeout = setTimeout(() => {
            enableScroll(this.freezeScroll, true);

            window.removeEventListener('click', this.handleClickOutside);
            window.removeEventListener('resize', this.resize);

            this.setState({ open: false });
        }, 300);
    }

    private freezeScroll = (event: any) => {
        if (this.mouseIn) {
            const curScrollPos = this.menu && this.menu.scrollTop;
            const dY = event.deltaY;

            if (
                (curScrollPos && dY) &&
                (dY > 0 && curScrollPos >= this.scrollableDist) ||
                (dY < 0 && curScrollPos <= 0)
            ) {
                if (event.preventDefault) {
                    return event.preventDefault();
                }
                return event.returnValue = false;
            }
            return false;
        }
        if (event.preventDefault) {
            return event.preventDefault();
        }
        event.returnValue = false;
    }

    private toggleOpen = () => {
        if (this.state.open) {
            this.onClose();
        } else {
            this.onOpen();
        }
    }

    private mouseEnterMenu = () => {
        const containerHeight = this.menu.clientHeight;
        const contentHeight = this.menu.scrollHeight;
        this.scrollableDist = contentHeight - containerHeight;

        this.mouseIn = true;
    }

    private mouseLeaveMenu = () => {
        this.mouseIn = false;
    }

    public render() {
        let open = this.state.open;
        const { menu, icon: _icon, label, component } = this.props;

        if (this.props.hasOwnProperty('open')) {
            open = this.props.open;
        }

        const classes = clsx(
            'AMB-DropDown',
            this.state.class,
            this.state.mobile && 'mobile'
        );

        return (
            <>
                {
                    <span className={'AMB-DropDown-item'} onClick={this.toggleOpen} ref={r => this.item = r}>
                        {component || label || _icon && <SVG src={_icon} />}
                    </span>
                }
                {open && ReactDOM.createPortal(<>
                    <nav
                        className={classes}
                        style={this.state.style}
                        ref={r => this.nav = r}
                        onMouseEnter={this.mouseEnterMenu}
                        onMouseLeave={this.mouseLeaveMenu}>
                        {
                            menu && Array.isArray(menu) && (
                                <ul className='menu'
                                    ref={r => this.menu = r}>
                                    {menu.map(({ text, meta, type, to, icon, image, click }, index) => {
                                        switch (type) {
                                            case 'header':
                                                const style = image && { backgroundImage: `url(${image})` } || {};
                                                return (
                                                    <li className='menu-header' key={index}>
                                                        <div className='image' style={style}></div>
                                                        <div className='content'>
                                                            <h5 className='title'>{text}</h5>
                                                            <p className='meta'>{meta}</p>
                                                        </div>
                                                    </li>
                                                );
                                            case 'separator':
                                                return <li className='menu-separator' key={index}></li>;
                                            case 'link':
                                                return (
                                                    <li className='menu-item' key={index} onClick={this.onClose}>
                                                        <Link to={to || ''}>
                                                            {icon && <SVG src={icon} className='menu-icon' />}
                                                            <span>{text}</span>
                                                        </Link>
                                                    </li>
                                                );

                                            case 'action':
                                                return (
                                                    <li
                                                        className='menu-item' key={index}
                                                        onClick={() => (click && click(), this.onClose())}>
                                                        <div>
                                                            {icon && <SVG src={icon} className='menu-icon' />}
                                                            <span>{text}</span>
                                                        </div>
                                                    </li>
                                                );
                                        }
                                    })}
                                </ul>
                            )
                        }
                    </nav>
                    {this.state.mobile && <>
                        <div className={clsx('AMB-DropDown-overlay', this.state.class)} onClick={this.onClose}></div>
                        <div className={clsx('AMB-DropDown-cancel', this.state.class)} onClick={this.onClose}>Cancel</div>
                    </>}
                </>, modalRoot)}
            </>
        );
    }
}
