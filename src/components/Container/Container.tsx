"use client";

import * as React from "react";
import "./Container.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Remove max-width constraint */
  fluid?: boolean;
  /** Use narrower max-width */
  narrow?: boolean;
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, fluid, narrow, className, ...props }, ref) => {
    const classes = [
      "ui-container",
      fluid && "ui-container--fluid",
      narrow && "ui-container--narrow",
      className,
    ].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
