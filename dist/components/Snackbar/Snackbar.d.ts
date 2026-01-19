import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
declare const SnackbarProvider: React.FC<ToastPrimitive.ToastProviderProps>;
declare const SnackbarViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
interface SnackbarProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
    multiline?: boolean;
}
declare const Snackbar: React.ForwardRefExoticComponent<SnackbarProps & React.RefAttributes<HTMLLIElement>>;
declare const SnackbarMessage: React.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SnackbarAction: React.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SnackbarClose: React.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { SnackbarProvider, SnackbarViewport, Snackbar, SnackbarMessage, SnackbarAction, SnackbarClose, };
//# sourceMappingURL=Snackbar.d.ts.map