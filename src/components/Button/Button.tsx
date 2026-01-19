/**
 * M3 Button Component
 * 
 * Material Design 3 Expressive button with five variants.
 * Supports: filled, tonal, outlined, elevated, text
 * 
 * @see https://m3.material.io/components/buttons/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Using plain class names to match bundled CSS (not CSS Modules)
const buttonVariants = cva(
  'ui-button',
  {
    variants: {
      variant: {
        filled: 'ui-button--filled',
        tonal: 'ui-button--tonal',
        outlined: 'ui-button--outlined',
        elevated: 'ui-button--elevated',
        text: 'ui-button--text',
      },
      size: {
        xs: 'ui-button--xs',
        sm: 'ui-button--sm',
        md: 'ui-button--md',
        lg: 'ui-button--lg',
        xl: 'ui-button--xl',
      },
      shape: {
        round: 'ui-button--round',
        square: 'ui-button--square',
      },
      fullWidth: {
        true: 'ui-button--full-width',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'sm',
      shape: 'round',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      fullWidth,
      icon,
      iconEnd,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isIconOnly = !children && (icon || iconEnd);

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, shape, fullWidth }),
          isIconOnly && 'ui-button--icon-only',
          loading && 'ui-button--loading',
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {icon && <span className="ui-button__icon">{icon}</span>}
        {children}
        {iconEnd && <span className="ui-button__icon">{iconEnd}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;
