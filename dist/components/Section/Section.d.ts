import * as React from "react";
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    /** Remove horizontal padding */
    flush?: boolean;
    /** Remove vertical margin */
    tight?: boolean;
    /** HTML element to render */
    as?: "section" | "div" | "article" | "aside" | "header" | "footer" | "main";
    className?: string;
}
export declare const Section: React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Section.d.ts.map