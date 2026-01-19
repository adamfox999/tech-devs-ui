import * as React from 'react';
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    /** Current value (controlled) */
    value?: number;
    /** Default value (uncontrolled) */
    defaultValue?: number;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment. When set, creates discrete stops. */
    step?: number;
    /** Callback when value changes */
    onChange?: (value: number) => void;
    /** Callback when interaction ends */
    onChangeEnd?: (value: number) => void;
    /** Size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color variant */
    color?: 'primary' | 'secondary' | 'tertiary';
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Centered slider (value starts from center) */
    centered?: boolean;
    /** Whether to show discrete stop indicators */
    showStops?: boolean;
    /** Value indicator display mode */
    showValue?: 'auto' | 'always' | 'never';
    /** Custom value formatter */
    valueFormatter?: (value: number) => string;
    /** Label text */
    label?: string;
    /** Start icon element */
    startIcon?: React.ReactNode;
    /** End icon element */
    endIcon?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
    /** Accessible name */
    'aria-label'?: string;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    /** Current values [min, max] */
    value?: [number, number];
    /** Default values */
    defaultValue?: [number, number];
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** Minimum separation between thumbs */
    minSeparation?: number;
    /** Callback when values change */
    onChange?: (value: [number, number]) => void;
    /** Callback when interaction ends */
    onChangeEnd?: (value: [number, number]) => void;
    /** Size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color variant */
    color?: 'primary' | 'secondary' | 'tertiary';
    /** Value indicator display mode */
    showValue?: 'auto' | 'always' | 'never';
    /** Custom value formatter */
    valueFormatter?: (value: number) => string;
    /** Label text */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
}
export declare const RangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Slider.d.ts.map