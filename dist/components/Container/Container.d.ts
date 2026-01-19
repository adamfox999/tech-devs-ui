import * as React from "react";
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /** Remove max-width constraint */
    fluid?: boolean;
    /** Use narrower max-width */
    narrow?: boolean;
    className?: string;
}
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Container.d.ts.map