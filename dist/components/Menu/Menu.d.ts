import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
export declare const Menu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
export declare const MenuTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const MenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
export declare const MenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const MenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const MenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
export interface MenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
    /** Alignment relative to trigger */
    align?: 'start' | 'center' | 'end';
    /** Side relative to trigger */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Offset from trigger */
    sideOffset?: number;
}
export declare const MenuContent: React.ForwardRefExoticComponent<MenuContentProps & React.RefAttributes<HTMLDivElement>>;
export interface MenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
    /** Leading icon element */
    leadingIcon?: React.ReactNode;
    /** Trailing icon element */
    trailingIcon?: React.ReactNode;
    /** Trailing text (e.g., keyboard shortcut) */
    trailingText?: string;
    /** Destructive/danger styling */
    destructive?: boolean;
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;
export interface MenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
    /** Leading icon when unchecked */
    leadingIcon?: React.ReactNode;
}
export declare const MenuCheckboxItem: React.ForwardRefExoticComponent<MenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const MenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const MenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const MenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface MenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
    /** Leading icon element */
    leadingIcon?: React.ReactNode;
}
export declare const MenuSubTrigger: React.ForwardRefExoticComponent<MenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
export declare const MenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Menu.d.ts.map