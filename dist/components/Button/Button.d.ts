import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "filled" | "tonal" | "outlined" | "elevated" | "text" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    shape?: "round" | "square" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Leading icon element */
    icon?: React.ReactNode;
    /** Trailing icon element */
    iconEnd?: React.ReactNode;
    /** Show loading state */
    loading?: boolean;
}
/**
 * Button - M3 Expressive
 *
 * @example
 * ```tsx
 * // Filled button (primary action)
 * <Button variant="filled">Save</Button>
 *
 * // Tonal button with icon
 * <Button variant="tonal" icon={<PlusIcon />}>Add Item</Button>
 *
 * // Large outlined button
 * <Button variant="outlined" size="lg">Learn More</Button>
 *
 * // Icon-only button
 * <Button variant="text" icon={<MenuIcon />} aria-label="Open menu" />
 * ```
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
export default Button;
//# sourceMappingURL=Button.d.ts.map