'use client';

import * as React from 'react';
import styles from './SearchBar.module.css';

/* ========================================
   SEARCH ICON
   ======================================== */

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      fill="currentColor"
    />
  </svg>
);

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
  </svg>
);

const ClearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
      fill="currentColor"
    />
  </svg>
);

const HistoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
      fill="currentColor"
    />
  </svg>
);

/* ========================================
   SEARCH BAR
   ======================================== */

export interface SearchBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Current search value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when search is submitted */
  onSubmit?: (value: string) => void;
  /** Callback when focused/clicked to expand */
  onExpand?: () => void;
  /** Leading icon element (defaults to search icon) */
  leadingIcon?: React.ReactNode;
  /** Whether leading icon is a button (e.g., back button) */
  leadingIconButton?: boolean;
  /** Leading icon click handler */
  onLeadingIconClick?: () => void;
  /** Trailing content (icons, avatar) */
  trailing?: React.ReactNode;
  /** Center-aligned text variant */
  centered?: boolean;
  /** Elevated appearance */
  elevated?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Accessible label */
  'aria-label'?: string;
}

export const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  (
    {
      value = '',
      placeholder = 'Search',
      onChange,
      onSubmit,
      onExpand,
      leadingIcon,
      leadingIconButton = false,
      onLeadingIconClick,
      trailing,
      centered = false,
      elevated = false,
      disabled = false,
      className,
      'aria-label': ariaLabel = 'Search',
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [focused, setFocused] = React.useState(false);

    const handleClear = () => {
      onChange?.('');
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && value) {
        onSubmit?.(value);
      }
      if (e.key === 'Escape') {
        handleClear();
        inputRef.current?.blur();
      }
    };

    const LeadingContent = () => {
      const icon = leadingIcon || <SearchIcon />;
      
      if (leadingIconButton) {
        return (
          <button
            type="button"
            className={styles.leadingIconButton}
            onClick={onLeadingIconClick}
            aria-label="Back"
          >
            {icon}
          </button>
        );
      }
      
      return <span className={styles.leadingIcon}>{icon}</span>;
    };

    return (
      <div
        ref={ref}
        role="search"
        data-centered={centered}
        data-elevated={elevated || focused}
        data-disabled={disabled}
        className={`${styles.searchBar} ${className || ''}`}
        onClick={() => {
          inputRef.current?.focus();
          onExpand?.();
        }}
        {...props}
      >
        <LeadingContent />
        
        <input
          ref={inputRef}
          type="text"
          role="searchbox"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          className={styles.input}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
        />
        
        <div className={styles.trailing}>
          {value && (
            <button
              type="button"
              className={styles.trailingIconButton}
              onClick={handleClear}
              aria-label="Clear search"
            >
              <ClearIcon />
            </button>
          )}
          {trailing}
        </div>
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

/* ========================================
   SEARCH VIEW (FULL SCREEN EXPANDED)
   ======================================== */

export interface SearchViewProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Whether the view is open */
  open: boolean;
  /** Callback to close the view */
  onClose: () => void;
  /** Current search value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when search is submitted */
  onSubmit?: (value: string) => void;
  /** Trailing icon buttons */
  trailing?: React.ReactNode;
  /** Search suggestions/history */
  children?: React.ReactNode;
}

export const SearchView = React.forwardRef<HTMLDivElement, SearchViewProps>(
  (
    {
      open,
      onClose,
      value = '',
      placeholder = 'Search',
      onChange,
      onSubmit,
      trailing,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Focus input on open
    React.useEffect(() => {
      if (open) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, [open]);

    const handleClear = () => {
      onChange?.('');
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && value) {
        onSubmit?.(value);
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (!open) return null;

    return (
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        data-state={open ? 'open' : 'closed'}
        className={`${styles.searchView} ${className || ''}`}
        {...props}
      >
        {/* Header */}
        <div className={styles.searchViewHeader}>
          <button
            type="button"
            className={styles.leadingIconButton}
            onClick={onClose}
            aria-label="Close search"
          >
            <BackIcon />
          </button>
          
          <input
            ref={inputRef}
            type="text"
            role="searchbox"
            value={value}
            placeholder={placeholder}
            className={styles.searchViewInput}
            onChange={(e) => onChange?.(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          
          <div className={styles.trailing}>
            {value && (
              <button
                type="button"
                className={styles.trailingIconButton}
                onClick={handleClear}
                aria-label="Clear"
              >
                <ClearIcon />
              </button>
            )}
            {trailing}
          </div>
        </div>
        
        {/* Content (suggestions/results) */}
        <div className={styles.searchViewContent}>
          {children}
        </div>
      </div>
    );
  }
);

SearchView.displayName = 'SearchView';

/* ========================================
   SEARCH SUGGESTION ITEM
   ======================================== */

export interface SearchSuggestionProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Suggestion text */
  children: React.ReactNode;
  /** Icon (defaults to history icon) */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Trailing element (e.g., insert button) */
  trailing?: React.ReactNode;
}

export const SearchSuggestion = React.forwardRef<HTMLLIElement, SearchSuggestionProps>(
  ({ children, icon, onClick, trailing, className, ...props }, ref) => (
    <li
      ref={ref}
      role="option"
      tabIndex={0}
      className={`${styles.suggestion} ${className || ''}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      {...props}
    >
      <span className={styles.suggestionIcon}>
        {icon || <HistoryIcon />}
      </span>
      <span className={styles.suggestionText}>{children}</span>
      {trailing && <span className={styles.suggestionTrailing}>{trailing}</span>}
    </li>
  )
);

SearchSuggestion.displayName = 'SearchSuggestion';

/* ========================================
   SEARCH SECTION HEADER
   ======================================== */

export interface SearchSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SearchSectionHeader = React.forwardRef<HTMLDivElement, SearchSectionHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={`${styles.searchSectionHeader} ${className || ''}`} {...props}>
      {children}
    </div>
  )
);

SearchSectionHeader.displayName = 'SearchSectionHeader';
