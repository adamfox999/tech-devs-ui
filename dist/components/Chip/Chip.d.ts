import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const chipVariants: (props?: ({
    variant?: "filter" | "assist" | "input" | "suggestion" | null | undefined;
    elevated?: boolean | null | undefined;
    selected?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>, VariantProps<typeof chipVariants> {
    icon?: React.ReactNode;
    onRemove?: () => void;
    onSelectedChange?: (selected: boolean) => void;
}
declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLButtonElement>>;
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    singleSelect?: boolean;
}
declare const ChipGroup: React.ForwardRefExoticComponent<ChipGroupProps & React.RefAttributes<HTMLDivElement>>;
export { Chip, ChipGroup, chipVariants };
//# sourceMappingURL=Chip.d.ts.map