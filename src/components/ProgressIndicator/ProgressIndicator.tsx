'use client';

import * as React from 'react';
import styles from './ProgressIndicator.module.css';

/* ========================================
   LINEAR PROGRESS INDICATOR
   ======================================== */

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

export const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (
    {
      value,
      buffer,
      size = 'default',
      color = 'primary',
      wavy = false,
      showLabel = false,
      labelFormatter = (v) => `${Math.round(v)}%`,
      className,
      'aria-label': ariaLabel = 'Progress',
      ...props
    },
    ref
  ) => {
    const isIndeterminate = value === undefined;
    const clampedValue = value !== undefined ? Math.min(100, Math.max(0, value)) : 0;
    const clampedBuffer = buffer !== undefined ? Math.min(100, Math.max(0, buffer)) : undefined;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        data-size={size}
        data-color={color}
        data-wavy={wavy}
        data-determinate={!isIndeterminate}
        className={`${styles.linearContainer} ${className || ''}`}
        {...props}
      >
        <div className={styles.linearTrack} />
        
        {/* Buffer indicator (for streaming) */}
        {clampedBuffer !== undefined && (
          <div
            className={styles.linearBuffer}
            style={{ width: `${clampedBuffer}%` }}
          />
        )}
        
        {/* Active indicator */}
        <div
          className={styles.linearIndicator}
          data-indeterminate={isIndeterminate}
          style={isIndeterminate ? undefined : { width: `${clampedValue}%` }}
        />
        
        {/* Stop indicator */}
        <div className={styles.linearStop} />
        
        {/* Label */}
        {showLabel && !isIndeterminate && (
          <span className={styles.label}>{labelFormatter(clampedValue)}</span>
        )}
      </div>
    );
  }
);

LinearProgress.displayName = 'LinearProgress';

/* ========================================
   CIRCULAR PROGRESS INDICATOR
   ======================================== */

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

export const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      value,
      size = 'default',
      color = 'primary',
      showLabel = false,
      labelFormatter = (v) => `${Math.round(v)}%`,
      thickness,
      className,
      'aria-label': ariaLabel = 'Progress',
      ...props
    },
    ref
  ) => {
    const isIndeterminate = value === undefined;
    const clampedValue = value !== undefined ? Math.min(100, Math.max(0, value)) : 0;

    // Calculate SVG dimensions based on size
    const sizeMap = {
      small: { viewBox: 24, radius: 9, defaultThickness: 3 },
      default: { viewBox: 48, radius: 20, defaultThickness: 4 },
      large: { viewBox: 64, radius: 28, defaultThickness: 4 },
    };

    const { viewBox, radius, defaultThickness } = sizeMap[size];
    const strokeWidth = thickness || defaultThickness;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = isIndeterminate
      ? 0
      : circumference - (clampedValue / 100) * circumference;

    const center = viewBox / 2;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        data-size={size}
        data-color={color}
        className={`${styles.circularContainer} ${className || ''}`}
        {...props}
      >
        <svg
          className={styles.circularSvg}
          viewBox={`0 0 ${viewBox} ${viewBox}`}
          data-indeterminate={isIndeterminate}
        >
          {/* Track */}
          <circle
            className={styles.circularTrack}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          {/* Indicator */}
          <circle
            className={styles.circularIndicator}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            data-indeterminate={isIndeterminate}
          />
        </svg>

        {/* Label inside circle */}
        {showLabel && !isIndeterminate && (
          <span className={styles.circularLabelInside}>
            {labelFormatter(clampedValue)}
          </span>
        )}
      </div>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

/* ========================================
   EXPORTS
   ======================================== */

export const ProgressIndicator = {
  Linear: LinearProgress,
  Circular: CircularProgress,
};
