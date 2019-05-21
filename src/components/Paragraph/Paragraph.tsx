/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import { IParagraph } from '../../interfaces';
import clsx from 'clsx';

import './Paragraph.scss';

const Paragraph = React.forwardRef((props: IParagraph, ref: any) => {

    const { className, content, children, light, ...other } = props;

    const classes = clsx(
        'AMB-Paragraph',
        className,
        light && 'light'
    );

    const innerHTML = content && { __html: content } || undefined;

    return (
        <>
            {innerHTML && (
                <p className={classes} {...other} dangerouslySetInnerHTML={innerHTML} ref={ref} />
            ) ||
                <p className={classes} {...other} ref={ref}>
                    {children}
                </p>
            }
        </>
    );
});

export default Paragraph;
