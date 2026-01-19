/**
 * M3 FAB Component
 * 
 * Material Design 3 Floating Action Button.
 * Supports: small, standard (default), large
 * Colors: primary, secondary, tertiary, surface
 * 
 * @see https://m3.material.io/components/floating-action-button/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import styles from './FAB.module.css';

const fabVariants = cva(
  styles.fab,
  {
    variants: {
      size: {
        small: styles.small,
        standard: styles.standard,
        large: styles.large,
      },
      color: {
        primary: styles.primary,
        secondary: styles.secondary,
        tertiary: styles.tertiary,
        surface: styles.surface,
      },
      lowered: {
        true: styles.lowered,
        false: '',
      },
    },
    defaultVariants: {
      size: 'standard',
      color: 'primary',
      lowered: false,
    },
  }
);

export interface FABProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
  icon: React.ReactNode;
  label?: string;
}

const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
  ({ className, size, color, lowered, icon, label, ...props }, ref) => {
    const isExtended = !!label;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          fabVariants({ size, color, lowered }),
          isExtended && styles.extended,
          className
        )}
        {...props}
      >
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        {isExtended && <span className={styles.label}>{label}</span>}
      </button>
    );
  }
);

FAB.displayName = 'FAB';

export { FAB, fabVariants };
