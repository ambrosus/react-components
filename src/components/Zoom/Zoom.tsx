import React from 'react';
import { Zoom } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBZoom = React.forwardRef((props: any, ref) => {

    return (
        <Zoom {...props} {...(ref && { ref })} />
    );
});

export default AMBZoom;
