'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import styles from './Menu.module.css';

/* ========================================
   MENU ROOT
   ======================================== */

export const Menu = DropdownMenuPrimitive.Root;
export const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={`${styles.trigger} ${className || ''}`}
    {...props}
  />
));
MenuTrigger.displayName = 'MenuTrigger';

export const MenuPortal = DropdownMenuPrimitive.Portal;
export const MenuGroup = DropdownMenuPrimitive.Group;
export const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const MenuSub = DropdownMenuPrimitive.Sub;

/* ========================================
   MENU CONTENT
   ======================================== */

export interface MenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  /** Alignment relative to trigger */
  align?: 'start' | 'center' | 'end';
  /** Side relative to trigger */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Offset from trigger */
  sideOffset?: number;
}

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  MenuContentProps
>(({ className, align = 'start', side = 'bottom', sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      align={align}
      side={side}
      sideOffset={sideOffset}
      className={`${styles.content} ${className || ''}`}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
MenuContent.displayName = 'MenuContent';

/* ========================================
   MENU ITEM
   ======================================== */

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  /** Leading icon element */
  leadingIcon?: React.ReactNode;
  /** Trailing icon element */
  trailingIcon?: React.ReactNode;
  /** Trailing text (e.g., keyboard shortcut) */
  trailingText?: string;
  /** Destructive/danger styling */
  destructive?: boolean;
}

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  MenuItemProps
>(({ className, leadingIcon, trailingIcon, trailingText, destructive, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={`${styles.item} ${className || ''}`}
    style={destructive ? { color: 'var(--error)' } : undefined}
    {...props}
  >
    {leadingIcon && <span className={styles.itemLeadingIcon}>{leadingIcon}</span>}
    {children}
    {trailingText && <span className={styles.itemTrailingText}>{trailingText}</span>}
    {trailingIcon && <span className={styles.itemTrailingIcon}>{trailingIcon}</span>}
  </DropdownMenuPrimitive.Item>
));
MenuItem.displayName = 'MenuItem';

/* ========================================
   CHECKBOX ITEM
   ======================================== */

export interface MenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
  /** Leading icon when unchecked */
  leadingIcon?: React.ReactNode;
}

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  MenuCheckboxItemProps
>(({ className, leadingIcon, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={`${styles.checkboxItem} ${className || ''}`}
    {...props}
  >
    <span className={styles.itemIndicator}>
      <DropdownMenuPrimitive.ItemIndicator>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            fill="currentColor"
          />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
      {!props.checked && leadingIcon}
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
MenuCheckboxItem.displayName = 'MenuCheckboxItem';

/* ========================================
   RADIO ITEM
   ======================================== */

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={`${styles.radioItem} ${className || ''}`}
    {...props}
  >
    <span className={styles.itemIndicator}>
      <DropdownMenuPrimitive.ItemIndicator>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
MenuRadioItem.displayName = 'MenuRadioItem';

/* ========================================
   SEPARATOR (DIVIDER)
   ======================================== */

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={`${styles.separator} ${className || ''}`}
    {...props}
  />
));
MenuSeparator.displayName = 'MenuSeparator';

/* ========================================
   LABEL
   ======================================== */

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={`${styles.label} ${className || ''}`}
    {...props}
  />
));
MenuLabel.displayName = 'MenuLabel';

/* ========================================
   SUBMENU
   ======================================== */

export interface MenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  /** Leading icon element */
  leadingIcon?: React.ReactNode;
}

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  MenuSubTriggerProps
>(({ className, leadingIcon, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={`${styles.subTrigger} ${className || ''}`}
    {...props}
  >
    {leadingIcon && <span className={styles.itemLeadingIcon}>{leadingIcon}</span>}
    {children}
    <span className={styles.subTriggerIcon}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="currentColor" />
      </svg>
    </span>
  </DropdownMenuPrimitive.SubTrigger>
));
MenuSubTrigger.displayName = 'MenuSubTrigger';

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={`${styles.subContent} ${className || ''}`}
    {...props}
  />
));
MenuSubContent.displayName = 'MenuSubContent';
