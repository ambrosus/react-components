import React, { useState } from 'react';
import { IAccordion, IAccordionItem } from '../../interfaces';

import './Accordion.scss';
import { SVG } from '../';
import iconArrowDown from '../../assets/svg/arrow-down.svg';

const AccordionItem = (props: IAccordionItem) => {
    const { title, content, open, index, onClick, icon, noIcon } = props;

    const classes = [
        'AccordionItem',
        open && 'active' || '',
    ].join(' ').trim();

    return (
        <div className={classes}>
            <div className='title' onClick={() => onClick(index)}>
                {title}
                {!noIcon && <SVG className='arrow' src={icon || iconArrowDown} />}
            </div>
            {open && <div className='content'>{content}</div>}
        </div>
    );
};

const Accordion = (props: IAccordion) => {
    const { className, items, closeAll, open: openProp, light, icon, noIcon, ...otherProps } = props;

    const [open, setOpen]: any = useState(() => {
        const _open = {};
        if (openProp && Array.isArray(openProp)) {
            openProp.map(index => _open[index] = true);
        }
        return _open;
    });

    const handleClick = (index: number) => {
        const _open = closeAll && { [index]: open[index] } || { ...open };
        setOpen({ ..._open, [index]: !_open[index] });
    };

    const classes = [
        'AMB-Accordion',
        light && 'light' || '',
        className || '',
    ].join(' ').trim();

    return (
        <div className={classes} {...otherProps}>
            {items.map(({ title, content }, index) => (
                <AccordionItem
                    title={title}
                    content={content}
                    key={index}
                    index={index}
                    onClick={handleClick}
                    open={!!open[index]}
                    icon={icon}
                    noIcon={noIcon}
                />
            ))}
        </div>
    );
};

export default Accordion;
