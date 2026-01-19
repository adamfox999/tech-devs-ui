import * as React from 'react';
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
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>;
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
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>;
export interface ListSubheaderProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}
export declare const ListSubheader: React.ForwardRefExoticComponent<ListSubheaderProps & React.RefAttributes<HTMLLIElement>>;
export interface ListItemIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}
export declare const ListItemIcon: React.ForwardRefExoticComponent<ListItemIconProps & React.RefAttributes<HTMLSpanElement>>;
export interface ListItemAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Image URL for avatar */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Fallback text (initials) */
    children?: React.ReactNode;
}
export declare const ListItemAvatar: React.ForwardRefExoticComponent<ListItemAvatarProps & React.RefAttributes<HTMLDivElement>>;
export interface ListItemImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Video thumbnail variant (larger) */
    video?: boolean;
}
export declare const ListItemImage: React.ForwardRefExoticComponent<ListItemImageProps & React.RefAttributes<HTMLDivElement>>;
export interface ListItemTrailingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}
export declare const ListItemTrailingText: React.ForwardRefExoticComponent<ListItemTrailingTextProps & React.RefAttributes<HTMLSpanElement>>;
export declare const ListItemTrailingIcon: React.ForwardRefExoticComponent<ListItemIconProps & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=List.d.ts.map