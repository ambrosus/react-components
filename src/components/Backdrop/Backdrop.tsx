import React from 'react';
import { Backdrop } from '@material-ui/core';

const AMBBackdrop = React.forwardRef((props: any, ref) => {

    return (
        <Backdrop {...props} {...(ref && { ref })} />
    );
});

export default AMBBackdrop;
