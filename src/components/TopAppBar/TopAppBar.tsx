'use client';

import * as React from 'react';
import styles from './TopAppBar.module.css';

/* ========================================
   TYPES
   ======================================== */

export interface TopAppBarProps extends React.HTMLAttributes<HTMLElement> {
  /** App bar variant */
  variant?: 'small' | 'medium' | 'large';
  /** Title alignment */
  align?: 'start' | 'center';
  /** Title text */
  title?: string;
  /** Subtitle text (for medium/large variants) */
  subtitle?: string;
  /** Navigation icon element */
  navigationIcon?: React.ReactNode;
  /** Action buttons */
  actions?: React.ReactNode;
  /** Elevated appearance (adds shadow) */
  elevated?: boolean;
  /** Contextual action mode (selection mode) */
  contextual?: boolean;
  /** Sticky positioning */
  sticky?: boolean;
  /** Fixed positioning */
  fixed?: boolean;
  /** Background color variant */
  color?: 'surface' | 'primary' | 'surface-container';
  /** Navigation click handler */
  onNavigationClick?: () => void;
}

export const TopAppBar = React.forwardRef<HTMLElement, TopAppBarProps>(
  (
    {
      variant = 'small',
      align = 'start',
      title,
      subtitle,
      navigationIcon,
      actions,
      elevated = false,
      contextual = false,
      sticky = false,
      fixed = false,
      color = 'surface',
      onNavigationClick,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = styles[variant];

    // Small variant
    if (variant === 'small') {
      return (
        <header
          ref={ref}
          role="banner"
          data-elevated={elevated}
          data-contextual={contextual}
          data-sticky={sticky}
          data-fixed={fixed}
          data-color={color}
          data-align={align}
          className={`${styles.appBar} ${variantClass} ${className || ''}`}
          {...props}
        >
          <div className={styles.smallContent}>
            {navigationIcon && (
              <button
                type="button"
                className={styles.navigationIcon}
                onClick={onNavigationClick}
                aria-label="Navigation"
              >
                {navigationIcon}
              </button>
            )}
            {title && <h1 className={styles.title}>{title}</h1>}
            {children}
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
        </header>
      );
    }

    // Medium variant
    if (variant === 'medium') {
      return (
        <header
          ref={ref}
          role="banner"
          data-elevated={elevated}
          data-contextual={contextual}
          data-sticky={sticky}
          data-fixed={fixed}
          data-color={color}
          className={`${styles.appBar} ${variantClass} ${className || ''}`}
          {...props}
        >
          <div className={styles.mediumContent}>
            <div className={styles.mediumTopRow}>
              {navigationIcon && (
                <button
                  type="button"
                  className={styles.navigationIcon}
                  onClick={onNavigationClick}
                  aria-label="Navigation"
                >
                  {navigationIcon}
                </button>
              )}
              <div style={{ flex: 1 }} />
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>
            <div className={styles.mediumBottomRow}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              {children}
            </div>
          </div>
        </header>
      );
    }

    // Large variant
    return (
      <header
        ref={ref}
        role="banner"
        data-elevated={elevated}
        data-contextual={contextual}
        data-sticky={sticky}
        data-fixed={fixed}
        data-color={color}
        className={`${styles.appBar} ${variantClass} ${className || ''}`}
        {...props}
      >
        <div className={styles.largeContent}>
          <div className={styles.largeTopRow}>
            {navigationIcon && (
              <button
                type="button"
                className={styles.navigationIcon}
                onClick={onNavigationClick}
                aria-label="Navigation"
              >
                {navigationIcon}
              </button>
            )}
            <div style={{ flex: 1 }} />
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
          <div className={styles.largeBottomRow}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {children}
          </div>
        </div>
      </header>
    );
  }
);

TopAppBar.displayName = 'TopAppBar';

/* ========================================
   APP BAR ACTION BUTTON
   ======================================== */

export interface AppBarActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon element */
  children: React.ReactNode;
  /** Accessible label */
  'aria-label': string;
}

export const AppBarAction = React.forwardRef<HTMLButtonElement, AppBarActionProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={`${styles.action} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
);

AppBarAction.displayName = 'AppBarAction';

/* ========================================
   SCROLL BEHAVIOR HOOK
   ======================================== */

export interface UseAppBarScrollOptions {
  /** Threshold in pixels before showing elevated state */
  threshold?: number;
  /** Target element to observe (defaults to window) */
  target?: HTMLElement | null;
}

export function useAppBarScroll(options: UseAppBarScrollOptions = {}) {
  const { threshold = 0, target = null } = options;
  const [elevated, setElevated] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const scrollTarget = target || window;
    
    const handleScroll = () => {
      const currentScrollY = target 
        ? target.scrollTop 
        : window.scrollY;
      
      // Elevated state
      setElevated(currentScrollY > threshold);
      
      // Collapse state (scroll down = collapse, scroll up = expand)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setCollapsed(true);
      } else if (currentScrollY < lastScrollY.current) {
        setCollapsed(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [threshold, target]);

  return { elevated, collapsed };
}
