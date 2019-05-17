import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBClickAwayListener = React.forwardRef((props: any, ref) => {

    return (
        <ClickAwayListener {...props} {...(ref && { ref })} />
    );
});

export default AMBClickAwayListener;
