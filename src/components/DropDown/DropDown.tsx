import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SVG } from '../';
import { IDropDown } from '../../interfaces';

import './DropDown.scss';
import { Popper } from '../Popper';
import { Fade } from '../Fade';
import { Zoom } from '../Zoom';
import { Grow } from '../Grow';

const DropDown = React.forwardRef((props: IDropDown, ref: any) => {
    const { component, label, icon: _icon, menu, transition, transitionProps } = props;
    const anchorEl: any = useRef();
    const navRef: any = useRef();
    const [mobile, setMobile] = useState();
    const [open, setOpen] = useState(props.hasOwnProperty('open') ? props.open : false);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (open) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [open]);

    const handleResize = () => {
        const m: any =  window.innerWidth <= 1024;

        if (m !== mobile) {
            setMobile(m);
        }
    };

    const toggleOpen = () => {
        if (open) {
            onClose();
        } else {
            onOpen();
        }
    };

    const onOpen = () => {
        if (!open) {
            setOpen(true);
        }
        if (props.onOpen) {
            props.onOpen();
        }
    };

    const onClose = () => {
        if (open) {
            setOpen(false);
        }
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleClickOutside = (event: any) => {
        try {
            if (
                open &&
                navRef.current &&
                !navRef.current.contains(event.target) &&
                anchorEl.current &&
                !anchorEl.current.contains(event.target)
            ) {
                onClose();
            }
            // tslint:disable-next-line:no-empty
        } catch (error) { }
    };

    const classes = clsx(
        'AMB-DropDown',
        mobile && 'mobile'
    );

    let Transition: any = Fade;
    if (transition === 'Grow') {
        Transition = Grow;
    }
    if (transition === 'Zoom') {
        Transition = Zoom;
    }

    return <>
        <span className={'AMB-DropDown-item'} onClick={toggleOpen} ref={anchorEl}>
            {component || label || _icon && <SVG src={_icon} />}
        </span>
        {
            <Popper
                open={open}
                anchorEl={anchorEl.current}
                placement='bottom-end'
                disablePortal={true}
                modifiers={{
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                }}
                transition
            >
                {({ TransitionProps }: any) => (
                    <Transition
                        {...TransitionProps}
                        timeout={250}
                        {...transitionProps}
                    >
                        <div>
                            <DropDownMenu
                                classes={classes}
                                menu={menu}
                                onClose={onClose}
                                ref={navRef}
                            />
                        </div>
                    </Transition>
                )}
            </Popper>
        }
    </>;
});

export const DropDownMenu = React.forwardRef((props: any, ref: any) => {
    const {
        classes,
        menu,
        onClose,
    } = props;

    return (
        <nav
            className={classes}
            ref={ref}
        >
            {
                menu && Array.isArray(menu) && (
                    <ul className='menu'>
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
                                        <li className='menu-item' key={index} onClick={onClose}>
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
                                            onClick={() => (click && click(), onClose())}>
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
    );
});

export default DropDown;
