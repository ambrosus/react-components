import React from 'react';
import { Fade } from '@material-ui/core';

const AMBFade = React.forwardRef((props: any, ref) => {

    return (
        <Fade {...props} {...(ref && { ref })} />
    );
});

export default AMBFade;
