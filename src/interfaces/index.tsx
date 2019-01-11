
export interface IButton {
    disabled?: boolean;
    classes?: string[];
    clicked?: () => any;
    children: React.ReactNode;
    loading?: boolean;
    type?: string;
}
