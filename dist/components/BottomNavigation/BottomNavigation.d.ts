import * as React from 'react';
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
export declare const BottomNavigation: React.ForwardRefExoticComponent<BottomNavigationProps & React.RefAttributes<HTMLElement>>;
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
export declare const BottomNavigationItem: React.ForwardRefExoticComponent<BottomNavigationItemProps & React.RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=BottomNavigation.d.ts.map