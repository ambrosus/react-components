import React from 'react';
import { Grow } from '@material-ui/core';

const AMBGrow = React.forwardRef((props: any, ref) => {

    return (
        <Grow {...props} {...(ref && { ref })} />
    );
});

export default AMBGrow;
