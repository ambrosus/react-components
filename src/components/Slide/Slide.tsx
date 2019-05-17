import React from 'react';
import { Slide } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBSlide = React.forwardRef((props: any, ref) => {

    return (
        <Slide {...props} {...(ref && { ref })} />
    );
});

export default AMBSlide;
