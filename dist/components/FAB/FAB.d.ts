import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const fabVariants: (props?: ({
    size?: "small" | "large" | "standard" | null | undefined;
    color?: "primary" | "secondary" | "tertiary" | "surface" | null | undefined;
    lowered?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof fabVariants> {
    icon: React.ReactNode;
    label?: string;
}
declare const FAB: React.ForwardRefExoticComponent<FABProps & React.RefAttributes<HTMLButtonElement>>;
export { FAB, fabVariants };
//# sourceMappingURL=FAB.d.ts.map