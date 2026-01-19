import * as React from 'react';
export interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Progress value from 0-100. Omit for indeterminate mode. */
    value?: number;
    /** Buffer value for streaming/video progress (0-100) */
    buffer?: number;
    /** Size variant */
    size?: 'thin' | 'default' | 'thick';
    /** Color variant */
    color?: 'primary' | 'secondary' | 'tertiary' | 'error';
    /** Enable wavy M3 Expressive style */
    wavy?: boolean;
    /** Show percentage label */
    showLabel?: boolean;
    /** Custom label formatter */
    labelFormatter?: (value: number) => string;
    /** Accessible label for screen readers */
    'aria-label'?: string;
}
export declare const LinearProgress: React.ForwardRefExoticComponent<LinearProgressProps & React.RefAttributes<HTMLDivElement>>;
export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Progress value from 0-100. Omit for indeterminate mode. */
    value?: number;
    /** Size variant */
    size?: 'small' | 'default' | 'large';
    /** Color variant */
    color?: 'primary' | 'secondary' | 'tertiary' | 'error';
    /** Show value label inside the circle */
    showLabel?: boolean;
    /** Custom label formatter */
    labelFormatter?: (value: number) => string;
    /** Track thickness in pixels (overrides size defaults) */
    thickness?: number;
    /** Accessible label for screen readers */
    'aria-label'?: string;
}
export declare const CircularProgress: React.ForwardRefExoticComponent<CircularProgressProps & React.RefAttributes<HTMLDivElement>>;
export declare const ProgressIndicator: {
    Linear: React.ForwardRefExoticComponent<LinearProgressProps & React.RefAttributes<HTMLDivElement>>;
    Circular: React.ForwardRefExoticComponent<CircularProgressProps & React.RefAttributes<HTMLDivElement>>;
};
//# sourceMappingURL=ProgressIndicator.d.ts.map