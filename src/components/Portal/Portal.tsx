import React from 'react';
import { Portal } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBPortal = React.forwardRef((props: any, ref) => {

    return (
        <Portal {...props} {...(ref && { ref })} />
    );
});

export default AMBPortal;
