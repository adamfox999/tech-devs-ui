'use client';

import * as React from 'react';
import styles from './Divider.module.css';

/* ========================================
   TYPES
   ======================================== */

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

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'default',
      inset = 'none',
      insetStart,
      insetEnd,
      spacing,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const orientationClass = orientation === 'vertical' ? styles.vertical : styles.horizontal;
    
    const customStyle: React.CSSProperties = {
      ...style,
      ...(insetStart && { '--inset-start': typeof insetStart === 'number' ? `${insetStart}px` : insetStart }),
      ...(insetEnd && { '--inset-end': typeof insetEnd === 'number' ? `${insetEnd}px` : insetEnd }),
    };

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        data-variant={variant}
        data-inset={inset}
        data-inset-start={insetStart ? true : undefined}
        data-inset-end={insetEnd ? true : undefined}
        data-spacing={spacing}
        className={`${styles.divider} ${orientationClass} ${className || ''}`}
        style={customStyle}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

/* ========================================
   DIVIDER WITH TEXT
   ======================================== */

export interface DividerWithTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text content */
  children: React.ReactNode;
  /** Text alignment */
  textAlign?: 'start' | 'center' | 'end';
  /** Spacing around the divider */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}

export const DividerWithText = React.forwardRef<HTMLDivElement, DividerWithTextProps>(
  (
    {
      children,
      textAlign = 'center',
      spacing = 'md',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        data-text-align={textAlign}
        data-spacing={spacing}
        className={`${styles.dividerWithText} ${className || ''}`}
        {...props}
      >
        <div className={styles.dividerLine} />
        <span className={styles.dividerText}>{children}</span>
        <div className={styles.dividerLine} />
      </div>
    );
  }
);

DividerWithText.displayName = 'DividerWithText';
