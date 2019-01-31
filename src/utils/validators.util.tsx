/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
// import Web3 from 'web3';

// const web3 = new Web3();

export const checkEmail = (value: string, allowEmpty = true) => {
    try {
        if (allowEmpty && !value) {
            return null;
        }
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(value) ? null : 'Email is invalid';
    } catch (error) {
        return 'Email is invalid';
    }
};

export const checkText = (value: string, allowEmpty = true) => {
    try {
        if (allowEmpty && !value) {
            return null;
        }
        const pattern = /^[a-zA-Z0-9_-\s]{2,100}$/;
        return pattern.test(value) ? null : 'Input is invalid';
    } catch (error) {
        return 'Input is invalid';
    }
};

export const checkTimeZone = (value: string, allowEmpty = true) => {
    try {
        if (allowEmpty && !value) {
            return null;
        }
        const pattern = /^[a-zA-Z_\-\/]{2,50}$/;
        return pattern.test(value) ? null : 'Time zone is invalid';
    } catch (error) {
        return 'Time zone is invalid';
    }
};

export const checkPassword = (value: string, allowEmpty = true) => {
    try {
        if (allowEmpty && !value) {
            return null;
        }
        const pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
        return pattern.test(value) ? null : 'Password is weak. Use at least 8 characters, one lowercase, one uppercase letter and a number';
    } catch (error) {
        return 'Password is weak. Use at least 8 characters, one lowercase, one uppercase letter and a number';
    }
};

// export const checkPrivateKey = (value: string, allowEmpty = true) => {
//     try {
//         if (allowEmpty && !value) {
//             return null;
//         }

//         console.log(web3.eth.accounts.privateKeyToAccount(value).address);
//         return null;
//     } catch (error) {
//         return 'Private key is invalid';
//     }
// };

// export const checkAddress = (value: string, allowEmpty = true) => {
//     try {
//         if (allowEmpty && !value) {
//             return null;
//         }

//         return web3.utils.isAddress(value) ? null : 'Public key is invalid';
//     } catch (error) {
//         return 'Public key is invalid';
//     }
// };

export const checkValidity = (value: any, validators: any): string => {
    const errors: any = [];
    let error: any = '';
    if (!validators) {
        return '';
    }

    if (validators.required) {
        error = value.trim() ? null : 'Required';
        if (error) {
            errors.push(error);
        }
    }

    if (validators.minLength) {
        error = value.length >= validators.minLength ? null : `Minimum ${validators.length} characters required`;
        if (error) {
            errors.push(error);
        }
    }

    if (validators.maxLength) {
        error = value.length <= validators.maxLength ? null : `Maximum ${validators.length} characters required`;
        if (error) {
            errors.push(error);
        }
    }

    if (validators.checkEmail) {
        error = checkEmail(value, validators.checkEmail.allowEmpty);
        if (error) {
            errors.push(error);
        }
    }

    if (validators.checkPassword) {
        error = checkPassword(value, validators.checkPassword.allowEmpty);
        if (error) {
            errors.push(error);
        }
    }

    // if (validators.checkAddress) {
    //     error = checkAddress(value, validators.checkAddress.allowEmpty);
    //     if (error) {
    //         errors.push(error);
    //     }
    // }

    // if (validators.checkPrivateKey) {
    //     error = checkPrivateKey(value, validators.checkPrivateKey.allowEmpty);
    //     if (error) {
    //         errors.push(error);
    //     }
    // }

    return errors.join(', ');
};
