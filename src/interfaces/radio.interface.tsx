
export interface IRadio {
    disabled?: boolean;
    className?: string;
    id?: string;
    changed?: (event: any) => any;
    name: string;
    light?: boolean;
    value?: string;
    label?: string;
    checked?: boolean;
}
