import { Control } from "react-hook-form";

export interface ICustomInputFields {
    id: string,
    variant: 'standard'|'outlined'|'filled',
    label: string,
    control: Control
    multiline?: boolean;
}