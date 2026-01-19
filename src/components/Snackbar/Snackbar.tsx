/**
 * M3 Snackbar Component
 * 
 * Material Design 3 snackbar for brief messages.
 * Uses Radix Toast primitive for accessibility.
 * 
 * @see https://m3.material.io/components/snackbar/overview
 */
'use client';

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import styles from './Snackbar.module.css';

const SnackbarProvider = ToastPrimitive.Provider;

const SnackbarViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(styles.viewport, className)}
    {...props}
  />
));
SnackbarViewport.displayName = ToastPrimitive.Viewport.displayName;

interface SnackbarProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  multiline?: boolean;
}

const Snackbar = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  SnackbarProps
>(({ className, multiline, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(
      styles.snackbar,
      multiline && styles.multiline,
      className
    )}
    {...props}
  />
));
Snackbar.displayName = ToastPrimitive.Root.displayName;

const SnackbarMessage = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn(styles.message, className)}
    {...props}
  />
));
SnackbarMessage.displayName = 'SnackbarMessage';

const SnackbarAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(styles.action, className)}
    {...props}
  />
));
SnackbarAction.displayName = ToastPrimitive.Action.displayName;

const SnackbarClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(styles.close, className)}
    {...props}
  >
    <X />
    <span className="sr-only">Close</span>
  </ToastPrimitive.Close>
));
SnackbarClose.displayName = ToastPrimitive.Close.displayName;

export {
  SnackbarProvider,
  SnackbarViewport,
  Snackbar,
  SnackbarMessage,
  SnackbarAction,
  SnackbarClose,
};
