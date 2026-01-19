"use client";

import * as React from "react";
import "./Section.css";

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

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, flush, tight, as: Component = "section", className, ...props }, ref) => {
    const classes = [
      "ui-section",
      flush && "ui-section--flush",
      tight && "ui-section--tight",
      className,
    ].filter(Boolean).join(" ");

    return (
      <Component ref={ref as React.Ref<HTMLElement>} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";
