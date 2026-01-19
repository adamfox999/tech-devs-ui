/**
 * M3 TextField Component
 * 
 * Material Design 3 text input with floating label.
 * Supports: filled, outlined
 * 
 * @see https://m3.material.io/components/text-fields/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import styles from './TextField.module.css';

const textFieldVariants = cva(
  styles.textField,
  {
    variants: {
      variant: {
        filled: styles.filled,
        outlined: styles.outlined,
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
);

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof textFieldVariants> {
  label?: string;
  supportingText?: string;
  error?: boolean;
  errorText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      variant,
      label,
      supportingText,
      error,
      errorText,
      leadingIcon,
      trailingIcon,
      prefix,
      suffix,
      disabled,
      id,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(
      !!value || !!defaultValue
    );
    const inputId = id || React.useId();

    // Track value changes for floating label
    React.useEffect(() => {
      setHasValue(!!value);
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    const isLabelFloating = isFocused || hasValue;

    return (
      <div
        className={cn(
          textFieldVariants({ variant }),
          error && styles.error,
          disabled && styles.disabled,
          isFocused && styles.focused,
          className
        )}
      >
        {/* Container */}
        <div className={styles.container}>
          {/* Leading icon */}
          {leadingIcon && (
            <span className={styles.leadingIcon} aria-hidden="true">
              {leadingIcon}
            </span>
          )}

          {/* Input wrapper */}
          <div className={styles.inputWrapper}>
            {/* Label */}
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  styles.label,
                  isLabelFloating && styles.labelFloating
                )}
              >
                {label}
              </label>
            )}

            {/* Prefix */}
            {prefix && isLabelFloating && (
              <span className={styles.prefix}>{prefix}</span>
            )}

            {/* Input */}
            <input
              ref={ref}
              id={inputId}
              type="text"
              className={styles.input}
              disabled={disabled}
              aria-invalid={error}
              aria-describedby={
                supportingText || errorText
                  ? `${inputId}-supporting`
                  : undefined
              }
              value={value}
              defaultValue={defaultValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />

            {/* Suffix */}
            {suffix && isLabelFloating && (
              <span className={styles.suffix}>{suffix}</span>
            )}
          </div>

          {/* Trailing icon */}
          {trailingIcon && (
            <span className={styles.trailingIcon} aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </div>

        {/* Active indicator (for filled variant) */}
        {variant === 'filled' && <div className={styles.activeIndicator} />}

        {/* Supporting text */}
        {(supportingText || errorText) && (
          <div
            id={`${inputId}-supporting`}
            className={styles.supportingText}
          >
            {error && errorText ? errorText : supportingText}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export { TextField, textFieldVariants };
