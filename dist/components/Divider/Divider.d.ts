import * as React from 'react';
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientation of the divider */
    orientation?: 'horizontal' | 'vertical';
    /** Visual weight */
    variant?: 'default' | 'heavy';
    /** Inset from edges */
    inset?: 'none' | 'start' | 'end' | 'both';
    /** Custom inset start value */
    insetStart?: number | string;
    /** Custom inset end value */
    insetEnd?: number | string;
    /** Spacing around the divider */
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export interface DividerWithTextProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Text content */
    children: React.ReactNode;
    /** Text alignment */
    textAlign?: 'start' | 'center' | 'end';
    /** Spacing around the divider */
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}
export declare const DividerWithText: React.ForwardRefExoticComponent<DividerWithTextProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Divider.d.ts.map