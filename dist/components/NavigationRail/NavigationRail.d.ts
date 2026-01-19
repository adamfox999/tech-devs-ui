import * as React from "react";
interface NavigationRailContextValue {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    mobileOpen: boolean;
    setMobileOpen: (value: boolean) => void;
    toggle: () => void;
}
export declare function useNavigationRail(): NavigationRailContextValue;
export interface NavigationRailProviderProps {
    children: React.ReactNode;
    defaultExpanded?: boolean;
    storageKey?: string;
}
export declare function NavigationRailProvider({ children, defaultExpanded, storageKey }: NavigationRailProviderProps): import("react/jsx-runtime").JSX.Element;
export interface NavigationRailProps extends React.HTMLAttributes<HTMLElement> {
    /** Custom width when collapsed (default: 96px per M3 spec) */
    collapsedWidth?: string;
    /** Custom width when expanded (default: 280px, range 220-360px) */
    expandedWidth?: string;
}
export declare const NavigationRail: React.ForwardRefExoticComponent<NavigationRailProps & React.RefAttributes<HTMLElement>>;
export interface NavigationRailHeaderProps extends React.HTMLAttributes<HTMLElement> {
}
export declare const NavigationRailHeader: React.ForwardRefExoticComponent<NavigationRailHeaderProps & React.RefAttributes<HTMLElement>>;
export interface NavigationRailFABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon to display in the FAB */
    icon: React.ReactNode;
    /** Label shown when rail is expanded (Extended FAB) */
    label?: string;
}
export declare const NavigationRailFAB: React.ForwardRefExoticComponent<NavigationRailFABProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavigationRailContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const NavigationRailContent: React.ForwardRefExoticComponent<NavigationRailContentProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationRailGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
}
export declare const NavigationRailGroup: React.ForwardRefExoticComponent<NavigationRailGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationRailItemProps extends React.HTMLAttributes<HTMLElement> {
    /** Whether this item is currently active/selected */
    active?: boolean;
    /** Icon element to display */
    icon?: React.ReactNode;
    /** Badge content (number or string) */
    badge?: number | string;
    /** Makes the item render as a different element (for links) */
    asChild?: boolean;
}
export declare const NavigationRailItem: React.ForwardRefExoticComponent<NavigationRailItemProps & React.RefAttributes<HTMLElement>>;
export interface NavigationRailDividerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const NavigationRailDivider: React.ForwardRefExoticComponent<NavigationRailDividerProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationRailFooterProps extends React.HTMLAttributes<HTMLElement> {
}
export declare const NavigationRailFooter: React.ForwardRefExoticComponent<NavigationRailFooterProps & React.RefAttributes<HTMLElement>>;
export interface NavigationRailUserProps extends React.HTMLAttributes<HTMLDivElement> {
    /** User avatar URL */
    avatarUrl?: string;
    /** User avatar fallback (initials) */
    avatarFallback?: string;
    /** User display name */
    name?: string;
    /** User email or secondary text */
    email?: string;
}
export declare const NavigationRailUser: React.ForwardRefExoticComponent<NavigationRailUserProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationRailToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon to show (default renders a chevron) */
    icon?: React.ReactNode;
}
export declare const NavigationRailToggle: React.ForwardRefExoticComponent<NavigationRailToggleProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavigationRailOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const NavigationRailOverlay: React.ForwardRefExoticComponent<NavigationRailOverlayProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationRailTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon when menu is closed */
    openIcon?: React.ReactNode;
    /** Icon when menu is open */
    closeIcon?: React.ReactNode;
}
export declare const NavigationRailTrigger: React.ForwardRefExoticComponent<NavigationRailTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=NavigationRail.d.ts.map