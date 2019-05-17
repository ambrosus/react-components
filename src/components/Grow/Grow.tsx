import React from 'react';
import { Grow } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBGrow = React.forwardRef((props: any, ref) => {

    return (
        <Grow {...props} {...(ref && { ref })} />
    );
});

export default AMBGrow;
