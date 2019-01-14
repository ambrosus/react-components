
export interface IButton {
    disabled?: boolean;
    className?: string;
    clicked?: () => any;
    children: string | React.ReactNode;
    loading?: boolean;
    type?: string;
    label?: string;
    icon?: string;
    primary?: boolean;
    outlined?: boolean;
    spinner?: string;
}
