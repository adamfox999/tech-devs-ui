import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const textFieldVariants: (props?: ({
    variant?: "filled" | "outlined" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof textFieldVariants> {
    label?: string;
    supportingText?: string;
    error?: boolean;
    errorText?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export { TextField, textFieldVariants };
//# sourceMappingURL=TextField.d.ts.map