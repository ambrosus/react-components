
export interface IButton {
    disabled?: boolean;
    className?: string;
    clicked?: () => any;
    children: React.ReactNode;
    loading?: boolean;
    type?: 'button' | 'submit';
    label?: string;
    icon?: string;
    primary?: boolean;
    secondary?: boolean;
    solid?: boolean;
    outline?: boolean;
    transparent?: boolean;
    light?: boolean;
}
