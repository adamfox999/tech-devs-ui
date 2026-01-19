'use client';

import * as React from 'react';
import styles from './Slider.module.css';

/* ========================================
   TYPES
   ======================================== */

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

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      min = 0,
      max = 100,
      step,
      onChange,
      onChangeEnd,
      size = 'md',
      color = 'primary',
      orientation = 'horizontal',
      centered = false,
      showStops = false,
      showValue = 'auto',
      valueFormatter = (v) => String(Math.round(v)),
      label,
      startIcon,
      endIcon,
      disabled = false,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    
    const trackRef = React.useRef<HTMLDivElement>(null);
    const thumbRef = React.useRef<HTMLDivElement>(null);
    const isDragging = React.useRef(false);

    // Calculate percentage position
    const percentage = ((value - min) / (max - min)) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    // Snap to step if discrete
    const snapToStep = (val: number): number => {
      if (!step) return val;
      const snapped = Math.round((val - min) / step) * step + min;
      return Math.min(max, Math.max(min, snapped));
    };

    // Calculate value from position
    const getValueFromPosition = (clientX: number, clientY: number): number => {
      if (!trackRef.current) return value;
      
      const rect = trackRef.current.getBoundingClientRect();
      let ratio: number;
      
      if (orientation === 'vertical') {
        ratio = 1 - (clientY - rect.top) / rect.height;
      } else {
        ratio = (clientX - rect.left) / rect.width;
      }
      
      ratio = Math.min(1, Math.max(0, ratio));
      const newValue = min + ratio * (max - min);
      return snapToStep(newValue);
    };

    // Handle pointer down
    const handlePointerDown = (e: React.PointerEvent) => {
      if (disabled) return;
      
      e.preventDefault();
      isDragging.current = true;
      
      const newValue = getValueFromPosition(e.clientX, e.clientY);
      setInternalValue(newValue);
      onChange?.(newValue);
      
      // Capture pointer for drag
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    // Handle pointer move
    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current || disabled) return;
      
      const newValue = getValueFromPosition(e.clientX, e.clientY);
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    // Handle pointer up
    const handlePointerUp = (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      
      isDragging.current = false;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      onChangeEnd?.(value);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      
      const stepSize = step || (max - min) / 100;
      let newValue = value;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          newValue = Math.min(max, value + stepSize);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          newValue = Math.max(min, value - stepSize);
          break;
        case 'Home':
          newValue = min;
          break;
        case 'End':
          newValue = max;
          break;
        case 'PageUp':
          newValue = Math.min(max, value + stepSize * 10);
          break;
        case 'PageDown':
          newValue = Math.max(min, value - stepSize * 10);
          break;
        default:
          return;
      }
      
      e.preventDefault();
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    // Generate stop indicators
    const stops = React.useMemo(() => {
      if (!step || !showStops) return null;
      
      const count = Math.floor((max - min) / step) + 1;
      return Array.from({ length: count }, (_, i) => {
        const stopValue = min + i * step;
        const isActive = stopValue <= value;
        return (
          <div
            key={stopValue}
            className={styles.stop}
            data-active={isActive}
          />
        );
      });
    }, [step, showStops, min, max, value]);

    // For centered slider
    const isNegative = centered && value < (min + max) / 2;
    const centerPercentage = centered ? 50 : 0;
    const activeWidth = centered
      ? Math.abs(clampedPercentage - 50)
      : clampedPercentage;

    return (
      <div className={className}>
        {/* Label */}
        {label && <label className={styles.label}>{label}</label>}
        
        <div
          ref={ref}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={ariaLabel || label}
          aria-disabled={disabled}
          aria-orientation={orientation}
          data-size={size}
          data-color={color}
          data-orientation={orientation}
          data-centered={centered}
          data-value-negative={isNegative}
          data-disabled={disabled}
          data-show-value={showValue}
          className={styles.container}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {/* Start Icon */}
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          
          {/* Track */}
          <div ref={trackRef} className={styles.track}>
            {/* Active Track */}
            <div
              className={styles.activeTrack}
              style={{
                width: orientation === 'horizontal' ? `${activeWidth}%` : '100%',
                left: centered && !isNegative ? '50%' : undefined,
                right: centered && isNegative ? '50%' : undefined,
                '--active-track-height': orientation === 'vertical' ? `${clampedPercentage}%` : undefined,
              } as React.CSSProperties}
            />
            
            {/* Stop Indicators */}
            {stops && <div className={styles.stops}>{stops}</div>}
            
            {/* Thumb */}
            <div
              ref={thumbRef}
              className={styles.thumb}
              style={{
                left: orientation === 'horizontal' ? `${clampedPercentage}%` : '50%',
                bottom: orientation === 'vertical' ? `${clampedPercentage}%` : undefined,
              }}
            >
              {/* Value Indicator */}
              {showValue !== 'never' && (
                <span className={styles.valueIndicator}>
                  {valueFormatter(value)}
                </span>
              )}
            </div>
          </div>
          
          {/* End Icon */}
          {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

/* ========================================
   RANGE SLIDER
   ======================================== */

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

export const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = [25, 75],
      min = 0,
      max = 100,
      step,
      minSeparation = 0,
      onChange,
      onChangeEnd,
      size = 'md',
      color = 'primary',
      showValue = 'auto',
      valueFormatter = (v) => String(Math.round(v)),
      label,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const value = controlledValue || internalValue;
    
    const trackRef = React.useRef<HTMLDivElement>(null);
    const activeThumb = React.useRef<0 | 1 | null>(null);
    const isDragging = React.useRef(false);

    const [lowValue, highValue] = value;
    const lowPercentage = ((lowValue - min) / (max - min)) * 100;
    const highPercentage = ((highValue - min) / (max - min)) * 100;

    const snapToStep = (val: number): number => {
      if (!step) return val;
      const snapped = Math.round((val - min) / step) * step + min;
      return Math.min(max, Math.max(min, snapped));
    };

    const getValueFromPosition = (clientX: number): number => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      return snapToStep(min + ratio * (max - min));
    };

    const handlePointerDown = (e: React.PointerEvent, thumbIndex: 0 | 1) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();
      
      isDragging.current = true;
      activeThumb.current = thumbIndex;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handleTrackPointerDown = (e: React.PointerEvent) => {
      if (disabled) return;
      
      const clickValue = getValueFromPosition(e.clientX);
      const distToLow = Math.abs(clickValue - lowValue);
      const distToHigh = Math.abs(clickValue - highValue);
      
      // Move the closer thumb
      const thumbIndex = distToLow <= distToHigh ? 0 : 1;
      activeThumb.current = thumbIndex;
      isDragging.current = true;
      
      updateValue(clickValue);
    };

    const updateValue = (newVal: number) => {
      const [low, high] = value;
      let newValue: [number, number];
      
      if (activeThumb.current === 0) {
        const maxLow = high - minSeparation;
        newValue = [Math.min(newVal, maxLow), high];
      } else {
        const minHigh = low + minSeparation;
        newValue = [low, Math.max(newVal, minHigh)];
      }
      
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current || disabled) return;
      updateValue(getValueFromPosition(e.clientX));
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      activeThumb.current = null;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      onChangeEnd?.(value);
    };

    return (
      <div className={className}>
        {label && <label className={styles.label}>{label}</label>}
        
        <div
          ref={ref}
          role="group"
          aria-label={label}
          data-size={size}
          data-color={color}
          data-disabled={disabled}
          data-show-value={showValue}
          className={styles.container}
          onPointerDown={handleTrackPointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          {...props}
        >
          <div ref={trackRef} className={styles.track}>
            {/* Range Track */}
            <div
              className={styles.rangeTrack}
              style={{
                left: `${lowPercentage}%`,
                width: `${highPercentage - lowPercentage}%`,
              }}
            />
            
            {/* Low Thumb */}
            <div
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuenow={lowValue}
              aria-valuemin={min}
              aria-valuemax={highValue - minSeparation}
              aria-label="Minimum value"
              className={styles.thumb}
              style={{ left: `${lowPercentage}%` }}
              onPointerDown={(e) => handlePointerDown(e, 0)}
            >
              {showValue !== 'never' && (
                <span className={styles.valueIndicator}>
                  {valueFormatter(lowValue)}
                </span>
              )}
            </div>
            
            {/* High Thumb */}
            <div
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuenow={highValue}
              aria-valuemin={lowValue + minSeparation}
              aria-valuemax={max}
              aria-label="Maximum value"
              className={styles.thumb}
              style={{ left: `${highPercentage}%` }}
              onPointerDown={(e) => handlePointerDown(e, 1)}
            >
              {showValue !== 'never' && (
                <span className={styles.valueIndicator}>
                  {valueFormatter(highValue)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
