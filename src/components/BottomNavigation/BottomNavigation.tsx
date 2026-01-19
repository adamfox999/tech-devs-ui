'use client';

import * as React from 'react';
import styles from './BottomNavigation.module.css';

/* ========================================
   BOTTOM NAVIGATION BAR
   ======================================== */

export interface BottomNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Currently active item value */
  value?: string | number;
  /** Callback when selection changes */
  onChange?: (value: string | number) => void;
  /** Label visibility mode */
  labelVisibility?: 'labeled' | 'selected' | 'unlabeled' | 'auto';
  /** Use M3 Expressive styling */
  expressive?: boolean;
  /** Horizontal layout for medium+ screens */
  layout?: 'vertical' | 'horizontal';
  /** Navigation items */
  children: React.ReactNode;
}

export const BottomNavigation = React.forwardRef<HTMLElement, BottomNavigationProps>(
  (
    {
      value,
      onChange,
      labelVisibility = 'labeled',
      expressive = false,
      layout = 'vertical',
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Clone children with active state and click handler
    const items = React.Children.map(children, (child) => {
      if (React.isValidElement<BottomNavigationItemProps>(child)) {
        return React.cloneElement(child, {
          active: child.props.value === value,
          onClick: () => {
            child.props.onClick?.();
            if (child.props.value !== undefined) {
              onChange?.(child.props.value);
            }
          },
        });
      }
      return child;
    });

    return (
      <nav
        ref={ref}
        role="navigation"
        data-expressive={expressive}
        data-layout={layout}
        data-label-visibility={labelVisibility}
        className={`${styles.navBar} ${className || ''}`}
        {...props}
      >
        <ul className={styles.items} role="menubar">
          {items}
        </ul>
      </nav>
    );
  }
);

BottomNavigation.displayName = 'BottomNavigation';

/* ========================================
   NAVIGATION ITEM
   ======================================== */

export interface BottomNavigationItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
  /** Unique value for this item */
  value?: string | number;
  /** Item label */
  label: string;
  /** Icon element (outlined) */
  icon: React.ReactNode;
  /** Filled icon element (shown when active) */
  iconFilled?: React.ReactNode;
  /** Active state (controlled by parent) */
  active?: boolean;
  /** Badge count (0 for dot badge, >0 for number) */
  badge?: number;
  /** Show label for this item */
  showLabel?: boolean | 'active-only';
  /** Click handler */
  onClick?: () => void;
  /** Link href for navigation */
  href?: string;
}

export const BottomNavigationItem = React.forwardRef<HTMLLIElement, BottomNavigationItemProps>(
  (
    {
      value,
      label,
      icon,
      iconFilled,
      active = false,
      badge,
      showLabel = true,
      onClick,
      href,
      className,
      ...props
    },
    ref
  ) => {
    // Determine if we should use an anchor or button
    const isLink = !!href;
    
    const content = (
      <>
        {/* Badge */}
        {badge !== undefined && (
          <span
            className={styles.badge}
            data-size={badge > 0 ? 'large' : 'small'}
            aria-label={badge > 0 ? `${badge} notifications` : 'notification'}
          >
            {badge > 0 && <span className={styles.badgeLabel}>{badge > 99 ? '99+' : badge}</span>}
          </span>
        )}
        
        {/* Active indicator with icon */}
        <span className={styles.activeIndicator}>
          <span className={styles.icon}>
            {iconFilled && <span className={styles.iconFilled}>{iconFilled}</span>}
            <span className={iconFilled ? styles.iconOutlined : undefined}>{icon}</span>
          </span>
        </span>
        
        {/* Label */}
        <span className={styles.label}>{label}</span>
      </>
    );

    if (isLink) {
      return (
        <li
          ref={ref}
          role="none"
          data-active={active}
          data-show-label={showLabel}
          className={`${styles.item} ${className || ''}`}
          {...props}
        >
          <a
            href={href}
            role="menuitem"
            aria-current={active ? 'page' : undefined}
            onClick={(e) => {
              onClick?.();
              // Allow default navigation
            }}
            style={{ display: 'contents' }}
          >
            {content}
          </a>
        </li>
      );
    }

    return (
      <li
        ref={ref}
        role="menuitem"
        tabIndex={0}
        aria-selected={active}
        data-active={active}
        data-show-label={showLabel}
        className={`${styles.item} ${className || ''}`}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        {...props}
      >
        {content}
      </li>
    );
  }
);

BottomNavigationItem.displayName = 'BottomNavigationItem';
