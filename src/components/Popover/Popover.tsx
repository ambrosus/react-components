import React from 'react';
import { Popover } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBPopover = React.forwardRef((props: any, ref) => {

    return (
        <Popover {...props} {...(ref && { ref })} />
    );
});

export default AMBPopover;
