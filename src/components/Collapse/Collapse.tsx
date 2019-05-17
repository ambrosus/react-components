import React from 'react';
import { Collapse } from '@material-ui/core';

const AMBCollapse = React.forwardRef((props: any, ref) => {

    return (
        <Collapse {...props} {...(ref && { ref })} />
    );
});

export default AMBCollapse;
