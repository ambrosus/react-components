import React from 'react';
import { Portal } from '@material-ui/core';

const AMBPortal = React.forwardRef((props: any, ref) => {

    return (
        <Portal {...props} {...(ref && { ref })} />
    );
});

export default AMBPortal;
