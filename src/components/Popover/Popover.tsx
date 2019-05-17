import React from 'react';
import { Popover } from '@material-ui/core';

const AMBPopover = React.forwardRef((props: any, ref) => {

    return (
        <Popover {...props} {...(ref && { ref })} />
    );
});

export default AMBPopover;
