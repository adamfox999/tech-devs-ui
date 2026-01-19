"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import "./NavigationRail.css"

/* ============================================================================
   CONTEXT
   ============================================================================ */

interface NavigationRailContextValue {
  expanded: boolean
  setExpanded: (value: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (value: boolean) => void
  toggle: () => void
}

const NavigationRailContext = React.createContext<NavigationRailContextValue | null>(null)

export function useNavigationRail() {
  const context = React.useContext(NavigationRailContext)
  if (!context) {
    throw new Error("useNavigationRail must be used within NavigationRailProvider")
  }
  return context
}

/* ============================================================================
   PROVIDER
   ============================================================================ */

export interface NavigationRailProviderProps {
  children: React.ReactNode
  defaultExpanded?: boolean
  storageKey?: string
}

export function NavigationRailProvider({ 
  children, 
  defaultExpanded = false,
  storageKey = "navigation-rail-expanded"
}: NavigationRailProviderProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // Persist state to localStorage
  React.useEffect(() => {
    if (typeof window === "undefined") return
    const stored = localStorage.getItem(storageKey)
    if (stored !== null) {
      setExpanded(stored === "true")
    }
  }, [storageKey])

  React.useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem(storageKey, String(expanded))
  }, [expanded, storageKey])

  const toggle = React.useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  return (
    <NavigationRailContext.Provider value={{ expanded, setExpanded, mobileOpen, setMobileOpen, toggle }}>
      {children}
    </NavigationRailContext.Provider>
  )
}

/* ============================================================================
   NAVIGATION RAIL ROOT
   ============================================================================ */

export interface NavigationRailProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom width when collapsed (default: 96px per M3 spec) */
  collapsedWidth?: string
  /** Custom width when expanded (default: 280px, range 220-360px) */
  expandedWidth?: string
}

export const NavigationRail = React.forwardRef<HTMLElement, NavigationRailProps>(
  ({ className, children, collapsedWidth, expandedWidth, style, ...props }, ref) => {
    const { expanded, mobileOpen } = useNavigationRail()
    
    const customStyle = {
      ...style,
      ...(collapsedWidth && { "--rail-width-collapsed": collapsedWidth }),
      ...(expandedWidth && { "--rail-width-expanded": expandedWidth }),
    } as React.CSSProperties
    
    return (
      <nav 
        ref={ref}
        className={cn("ui-navigation-rail", className)}
        data-expanded={expanded}
        data-mobile-open={mobileOpen}
        role="navigation"
        aria-label="Main navigation"
        style={customStyle}
        {...props}
      >
        {children}
      </nav>
    )
  }
)
NavigationRail.displayName = "NavigationRail"

/* ============================================================================
   NAVIGATION RAIL HEADER
   ============================================================================ */

export interface NavigationRailHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const NavigationRailHeader = React.forwardRef<HTMLElement, NavigationRailHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header 
        ref={ref}
        className={cn("ui-navigation-rail__header", className)}
        {...props}
      >
        {children}
      </header>
    )
  }
)
NavigationRailHeader.displayName = "NavigationRailHeader"

/* ============================================================================
   NAVIGATION RAIL FAB (Floating Action Button)
   ============================================================================ */

export interface NavigationRailFABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display in the FAB */
  icon: React.ReactNode
  /** Label shown when rail is expanded (Extended FAB) */
  label?: string
}

export const NavigationRailFAB = React.forwardRef<HTMLButtonElement, NavigationRailFABProps>(
  ({ className, icon, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("ui-navigation-rail__fab", className)}
        type="button"
        {...props}
      >
        {icon}
        {label && <span className="ui-navigation-rail__fab-label">{label}</span>}
      </button>
    )
  }
)
NavigationRailFAB.displayName = "NavigationRailFAB"

/* ============================================================================
   NAVIGATION RAIL CONTENT
   ============================================================================ */

export interface NavigationRailContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationRailContent = React.forwardRef<HTMLDivElement, NavigationRailContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("ui-navigation-rail__content", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationRailContent.displayName = "NavigationRailContent"

/* ============================================================================
   NAVIGATION RAIL GROUP
   ============================================================================ */

export interface NavigationRailGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

export const NavigationRailGroup = React.forwardRef<HTMLDivElement, NavigationRailGroupProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("ui-navigation-rail__group", className)}
        {...props}
      >
        {label && (
          <span className="ui-navigation-rail__group-label">{label}</span>
        )}
        {children}
      </div>
    )
  }
)
NavigationRailGroup.displayName = "NavigationRailGroup"

/* ============================================================================
   NAVIGATION RAIL ITEM
   ============================================================================ */

export interface NavigationRailItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether this item is currently active/selected */
  active?: boolean
  /** Icon element to display */
  icon?: React.ReactNode
  /** Badge content (number or string) */
  badge?: number | string
  /** Makes the item render as a different element (for links) */
  asChild?: boolean
}

export const NavigationRailItem = React.forwardRef<HTMLElement, NavigationRailItemProps>(
  ({ className, children, active, icon, badge, asChild, onClick, ...props }, ref) => {
    const { setMobileOpen } = useNavigationRail()
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      setMobileOpen(false)
      onClick?.(e)
    }
    
    // When asChild is true, we clone the child and pass our props
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        className: cn("ui-navigation-rail__item", className, (children as React.ReactElement<any>).props.className),
        "data-active": active,
        onClick: handleClick,
        ...props,
        children: (
          <>
            {icon && <span className="ui-navigation-rail__item-icon">{icon}</span>}
            <span className="ui-navigation-rail__item-label">
              {(children as React.ReactElement<any>).props.children}
            </span>
            {badge !== undefined && (
              <span className="ui-navigation-rail__badge">{badge}</span>
            )}
          </>
        ),
      })
    }
    
    return (
      <div 
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("ui-navigation-rail__item", className)}
        data-active={active}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        {...props}
      >
        {icon && <span className="ui-navigation-rail__item-icon">{icon}</span>}
        <span className="ui-navigation-rail__item-label">{children}</span>
        {badge !== undefined && (
          <span className="ui-navigation-rail__badge">{badge}</span>
        )}
      </div>
    )
  }
)
NavigationRailItem.displayName = "NavigationRailItem"

/* ============================================================================
   NAVIGATION RAIL DIVIDER
   ============================================================================ */

export interface NavigationRailDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationRailDivider = React.forwardRef<HTMLDivElement, NavigationRailDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("ui-navigation-rail__divider", className)}
        role="separator"
        {...props}
      />
    )
  }
)
NavigationRailDivider.displayName = "NavigationRailDivider"

/* ============================================================================
   NAVIGATION RAIL FOOTER
   ============================================================================ */

export interface NavigationRailFooterProps extends React.HTMLAttributes<HTMLElement> {}

export const NavigationRailFooter = React.forwardRef<HTMLElement, NavigationRailFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <footer 
        ref={ref}
        className={cn("ui-navigation-rail__footer", className)}
        {...props}
      >
        {children}
      </footer>
    )
  }
)
NavigationRailFooter.displayName = "NavigationRailFooter"

/* ============================================================================
   NAVIGATION RAIL USER (for footer user profile)
   ============================================================================ */

export interface NavigationRailUserProps extends React.HTMLAttributes<HTMLDivElement> {
  /** User avatar URL */
  avatarUrl?: string
  /** User avatar fallback (initials) */
  avatarFallback?: string
  /** User display name */
  name?: string
  /** User email or secondary text */
  email?: string
}

export const NavigationRailUser = React.forwardRef<HTMLDivElement, NavigationRailUserProps>(
  ({ className, avatarUrl, avatarFallback, name, email, onClick, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("ui-navigation-rail__user", className)}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...props}
      >
        <div className="ui-navigation-rail__avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name || "User"} />
          ) : (
            avatarFallback || "?"
          )}
        </div>
        <div className="ui-navigation-rail__user-info">
          <span className="ui-navigation-rail__user-name">{name || "Guest"}</span>
          {email && <span className="ui-navigation-rail__user-email">{email}</span>}
        </div>
      </div>
    )
  }
)
NavigationRailUser.displayName = "NavigationRailUser"

/* ============================================================================
   NAVIGATION RAIL TOGGLE
   ============================================================================ */

export interface NavigationRailToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to show (default renders a chevron) */
  icon?: React.ReactNode
}

export const NavigationRailToggle = React.forwardRef<HTMLButtonElement, NavigationRailToggleProps>(
  ({ className, icon, ...props }, ref) => {
    const { expanded, toggle } = useNavigationRail()
    
    return (
      <button 
        ref={ref}
        className={cn("ui-navigation-rail__toggle", className)}
        onClick={toggle}
        aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
        {...props}
      >
        {icon || (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        )}
      </button>
    )
  }
)
NavigationRailToggle.displayName = "NavigationRailToggle"

/* ============================================================================
   NAVIGATION RAIL OVERLAY (for mobile)
   ============================================================================ */

export interface NavigationRailOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavigationRailOverlay = React.forwardRef<HTMLDivElement, NavigationRailOverlayProps>(
  ({ className, onClick, ...props }, ref) => {
    const { mobileOpen, setMobileOpen } = useNavigationRail()
    
    if (!mobileOpen) return null
    
    return (
      <div 
        ref={ref}
        className={cn("ui-navigation-rail__overlay", className)}
        onClick={(e) => {
          setMobileOpen(false)
          onClick?.(e)
        }}
        {...props}
      />
    )
  }
)
NavigationRailOverlay.displayName = "NavigationRailOverlay"

/* ============================================================================
   NAVIGATION RAIL MOBILE TRIGGER
   ============================================================================ */

export interface NavigationRailTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon when menu is closed */
  openIcon?: React.ReactNode
  /** Icon when menu is open */
  closeIcon?: React.ReactNode
}

export const NavigationRailTrigger = React.forwardRef<HTMLButtonElement, NavigationRailTriggerProps>(
  ({ className, openIcon, closeIcon, ...props }, ref) => {
    const { mobileOpen, setMobileOpen } = useNavigationRail()
    
    const defaultOpenIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    )
    
    const defaultCloseIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    )
    
    return (
      <button
        ref={ref}
        className={cn("ui-navigation-rail__mobile-trigger", className)}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        {...props}
      >
        {mobileOpen ? (closeIcon || defaultCloseIcon) : (openIcon || defaultOpenIcon)}
      </button>
    )
  }
)
NavigationRailTrigger.displayName = "NavigationRailTrigger"
