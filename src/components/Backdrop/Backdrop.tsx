import React from 'react';
import { Backdrop } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBBackdrop = React.forwardRef((props: any, ref) => {

    return (
        <Backdrop {...props} {...(ref && { ref })} />
    );
});

export default AMBBackdrop;
