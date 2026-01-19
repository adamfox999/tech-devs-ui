import * as React from 'react';
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
export declare const TopAppBar: React.ForwardRefExoticComponent<TopAppBarProps & React.RefAttributes<HTMLElement>>;
export interface AppBarActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon element */
    children: React.ReactNode;
    /** Accessible label */
    'aria-label': string;
}
export declare const AppBarAction: React.ForwardRefExoticComponent<AppBarActionProps & React.RefAttributes<HTMLButtonElement>>;
export interface UseAppBarScrollOptions {
    /** Threshold in pixels before showing elevated state */
    threshold?: number;
    /** Target element to observe (defaults to window) */
    target?: HTMLElement | null;
}
export declare function useAppBarScroll(options?: UseAppBarScrollOptions): {
    elevated: boolean;
    collapsed: boolean;
};
//# sourceMappingURL=TopAppBar.d.ts.map