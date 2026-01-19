import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const iconButtonVariants: (props?: ({
    variant?: "filled" | "tonal" | "outlined" | "standard" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    selected?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    icon: React.ReactNode;
    selectedIcon?: React.ReactNode;
    toggle?: boolean;
    onToggle?: (selected: boolean) => void;
    'aria-label': string;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton, iconButtonVariants };
//# sourceMappingURL=IconButton.d.ts.map