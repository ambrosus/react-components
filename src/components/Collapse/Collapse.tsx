import React from 'react';
import { Collapse } from '@material-ui/core';

// tslint:disable-next-line:ter-prefer-arrow-callback
const AMBCollapse = React.forwardRef((props: any, ref) => {

    return (
        <Collapse {...props} {...(ref && { ref })} />
    );
});

export default AMBCollapse;
