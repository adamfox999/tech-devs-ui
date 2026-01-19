/**
 * M3 IconButton Component
 * 
 * Material Design 3 icon-only buttons.
 * Supports: standard, filled, tonal, outlined
 * 
 * @see https://m3.material.io/components/icon-buttons/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import styles from './IconButton.module.css';

const iconButtonVariants = cva(
  styles.iconButton,
  {
    variants: {
      variant: {
        standard: styles.standard,
        filled: styles.filled,
        tonal: styles.tonal,
        outlined: styles.outlined,
      },
      size: {
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg,
      },
      selected: {
        true: styles.selected,
        false: '',
      },
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
      selected: false,
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;
  toggle?: boolean;
  onToggle?: (selected: boolean) => void;
  'aria-label': string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      selected,
      icon,
      selectedIcon,
      toggle = false,
      onToggle,
      onClick,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (toggle && onToggle) {
        onToggle(!selected);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(iconButtonVariants({ variant, size, selected }), className)}
        aria-label={ariaLabel}
        aria-pressed={toggle ? !!selected : undefined}
        onClick={handleClick}
        {...props}
      >
        <span className={styles.icon} aria-hidden="true">
          {selected && selectedIcon ? selectedIcon : icon}
        </span>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
