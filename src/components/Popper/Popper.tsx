import React from 'react';
import { Popper } from '@material-ui/core';

const AMBPopper = React.forwardRef((props: any, ref) => {

    return (
        <Popper {...props} {...(ref && { ref })} />
    );
});

export default AMBPopper;
