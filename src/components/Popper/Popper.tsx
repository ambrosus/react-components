import React from 'react';
import { Popper } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBPopper = React.forwardRef((props: any, ref) => {

    return (
        <Popper {...props} {...(ref && { ref })} />
    );
});

export default AMBPopper;
