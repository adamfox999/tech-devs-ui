'use client';

import * as React from 'react';
import styles from './List.module.css';

/* ========================================
   LIST CONTAINER
   ======================================== */

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Visual variant */
  variant?: 'standard' | 'segmented';
  /** Show dividers between items */
  dividers?: 'none' | 'full' | 'inset';
  /** Dense layout with reduced spacing */
  dense?: boolean;
  /** List role for accessibility */
  role?: 'list' | 'listbox' | 'menu' | 'tree';
  /** Accessible label */
  'aria-label'?: string;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  (
    {
      variant = 'standard',
      dividers = 'none',
      dense = false,
      role = 'list',
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <ul
        ref={ref}
        role={role}
        data-variant={variant}
        data-dividers={dividers}
        data-dense={dense}
        className={`${styles.list} ${className || ''}`}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

List.displayName = 'List';

/* ========================================
   LIST ITEM
   ======================================== */

export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
  /** Primary text */
  headline: React.ReactNode;
  /** Secondary text */
  supportingText?: React.ReactNode;
  /** Number of text lines (1, 2, or 3) */
  lines?: 1 | 2 | 3;
  /** Leading content (icon, avatar, image, checkbox) */
  leading?: React.ReactNode;
  /** Trailing content (icon, text, checkbox, switch) */
  trailing?: React.ReactNode;
  /** Interactive item (clickable) */
  interactive?: boolean;
  /** Selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  /** Keyboard handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLLIElement>) => void;
  /** Item value for controlled selection */
  value?: string | number;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      headline,
      supportingText,
      lines,
      leading,
      trailing,
      interactive = false,
      selected = false,
      disabled = false,
      onClick,
      onKeyDown,
      className,
      ...props
    },
    ref
  ) => {
    // Auto-detect lines based on content
    const lineCount = lines || (supportingText ? 2 : 1);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (interactive && !disabled && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.(e as unknown as React.MouseEvent<HTMLLIElement>);
      }
      onKeyDown?.(e);
    };

    return (
      <li
        ref={ref}
        role={interactive ? 'option' : 'listitem'}
        tabIndex={interactive && !disabled ? 0 : undefined}
        aria-selected={interactive ? selected : undefined}
        aria-disabled={disabled}
        data-lines={lineCount}
        data-interactive={interactive}
        data-selected={selected}
        data-disabled={disabled}
        className={`${styles.listItem} ${className || ''}`}
        onClick={interactive && !disabled ? onClick : undefined}
        onKeyDown={interactive ? handleKeyDown : onKeyDown}
        {...props}
      >
        {/* Leading content */}
        {leading && <div className={styles.leading}>{leading}</div>}

        {/* Text content */}
        <div className={styles.content}>
          <p className={styles.headline}>{headline}</p>
          {supportingText && (
            <p className={styles.supportingText}>{supportingText}</p>
          )}
        </div>

        {/* Trailing content */}
        {trailing && <div className={styles.trailing}>{trailing}</div>}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';

/* ========================================
   LIST SUBHEADER
   ======================================== */

export interface ListSubheaderProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export const ListSubheader = React.forwardRef<HTMLLIElement, ListSubheaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        role="presentation"
        className={`${styles.subheader} ${className || ''}`}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListSubheader.displayName = 'ListSubheader';

/* ========================================
   HELPER COMPONENTS FOR LEADING CONTENT
   ======================================== */

export interface ListItemIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const ListItemIcon = React.forwardRef<HTMLSpanElement, ListItemIconProps>(
  ({ children, className, ...props }, ref) => (
    <span ref={ref} className={`${styles.leadingIcon} ${className || ''}`} {...props}>
      {children}
    </span>
  )
);

ListItemIcon.displayName = 'ListItemIcon';

export interface ListItemAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL for avatar */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text (initials) */
  children?: React.ReactNode;
}

export const ListItemAvatar = React.forwardRef<HTMLDivElement, ListItemAvatarProps>(
  ({ src, alt, children, className, ...props }, ref) => (
    <div ref={ref} className={`${styles.leadingAvatar} ${className || ''}`} {...props}>
      {src ? (
        <img src={src} alt={alt || ''} className={styles.leadingAvatarImage} />
      ) : (
        <span className={styles.leadingAvatarText}>{children}</span>
      )}
    </div>
  )
);

ListItemAvatar.displayName = 'ListItemAvatar';

export interface ListItemImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Video thumbnail variant (larger) */
  video?: boolean;
}

export const ListItemImage = React.forwardRef<HTMLDivElement, ListItemImageProps>(
  ({ video = false, src, alt, className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${video ? styles.leadingVideo : styles.leadingImage} ${className || ''}`}
    >
      <img src={src} alt={alt || ''} {...props} />
    </div>
  )
);

ListItemImage.displayName = 'ListItemImage';

/* ========================================
   HELPER COMPONENTS FOR TRAILING CONTENT
   ======================================== */

export interface ListItemTrailingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const ListItemTrailingText = React.forwardRef<HTMLSpanElement, ListItemTrailingTextProps>(
  ({ children, className, ...props }, ref) => (
    <span ref={ref} className={`${styles.trailingText} ${className || ''}`} {...props}>
      {children}
    </span>
  )
);

ListItemTrailingText.displayName = 'ListItemTrailingText';

export const ListItemTrailingIcon = React.forwardRef<HTMLSpanElement, ListItemIconProps>(
  ({ children, className, ...props }, ref) => (
    <span ref={ref} className={`${styles.trailingIcon} ${className || ''}`} {...props}>
      {children}
    </span>
  )
);

ListItemTrailingIcon.displayName = 'ListItemTrailingIcon';
