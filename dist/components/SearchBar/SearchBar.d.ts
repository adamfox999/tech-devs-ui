import * as React from 'react';
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
export declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const SearchView: React.ForwardRefExoticComponent<SearchViewProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const SearchSuggestion: React.ForwardRefExoticComponent<SearchSuggestionProps & React.RefAttributes<HTMLLIElement>>;
export interface SearchSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const SearchSectionHeader: React.ForwardRefExoticComponent<SearchSectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SearchBar.d.ts.map