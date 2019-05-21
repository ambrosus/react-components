import React from 'react';
import { Modal } from '@material-ui/core';

const AMBModal = React.forwardRef((props: any, ref) => {

    return (
        <Modal {...props} {...(ref && { ref })} />
    );
});

export default AMBModal;
