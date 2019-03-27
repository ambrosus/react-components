
function capitalize(value: string) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export default function validate(value: any, type: any, required: boolean = true, options?: {}) {
    let pattern: any;

    if (required && (typeof value === 'string' && !value.trim()) || !value) {
        return `${capitalize(type)} is required.`;
    }

    switch (type) {
        case 'email':
            pattern = /^([0-9a-zA-Z]([-.+\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
            if (!pattern.test(value)) {
                return 'Email is invalid.';
            }
            return '';

        case 'password':
            pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
            if (!pattern.test(value)) {
                return 'Password is weak. Use at least 8 characters, one lowercase, one uppercase letter and a number.';
            }
            return '';

        default:
            return '';
    }
}
