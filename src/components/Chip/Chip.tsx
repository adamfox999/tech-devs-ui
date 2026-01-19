/**
 * M3 Chip Component
 * 
 * Material Design 3 chips with four variants.
 * Supports: assist, filter, input, suggestion
 * 
 * @see https://m3.material.io/components/chips/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { X, Check } from 'lucide-react';
import styles from './Chip.module.css';

const chipVariants = cva(
  styles.chip,
  {
    variants: {
      variant: {
        assist: styles.assist,
        filter: styles.filter,
        input: styles.input,
        suggestion: styles.suggestion,
      },
      elevated: {
        true: styles.elevated,
        false: '',
      },
      selected: {
        true: styles.selected,
        false: '',
      },
    },
    defaultVariants: {
      variant: 'assist',
      elevated: false,
      selected: false,
    },
  }
);

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof chipVariants> {
  icon?: React.ReactNode;
  onRemove?: () => void;
  onSelectedChange?: (selected: boolean) => void;
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      variant,
      elevated,
      selected,
      icon,
      onRemove,
      onSelectedChange,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const isCheckable = variant === 'filter' || variant === 'suggestion';
    const hasRemove = variant === 'input' && onRemove;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isCheckable && onSelectedChange) {
        onSelectedChange(!selected);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role={isCheckable ? 'checkbox' : undefined}
        aria-checked={isCheckable ? !!selected : undefined}
        className={cn(chipVariants({ variant, elevated, selected }), className)}
        onClick={handleClick}
        {...props}
      >
        {/* Leading icon or check mark */}
        {selected && isCheckable ? (
          <span className={styles.checkIcon} aria-hidden="true">
            <Check />
          </span>
        ) : icon ? (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        ) : null}
        
        {/* Label */}
        <span className={styles.label}>{children}</span>
        
        {/* Remove button for input chips */}
        {hasRemove && (
          <span
            role="button"
            tabIndex={0}
            className={styles.removeButton}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                onRemove?.();
              }
            }}
            aria-label="Remove"
          >
            <X />
          </span>
        )}
      </button>
    );
  }
);

Chip.displayName = 'Chip';

/* ChipGroup for managing multiple chips */
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  singleSelect?: boolean;
}

const ChipGroup = React.forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ className, children, singleSelect, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={singleSelect ? 'radiogroup' : 'group'}
        className={cn(styles.chipGroup, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ChipGroup.displayName = 'ChipGroup';

export { Chip, ChipGroup, chipVariants };
