import * as React from "react";
export interface BreakoutCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /** Gap between carousel items (CSS value) */
    gap?: string;
    /** Custom container max-width to align with (defaults to --container-max) */
    containerWidth?: string;
    /** Show navigation arrows (hidden on touch devices automatically) */
    showArrows?: boolean;
    /** Snap items to start position */
    snap?: boolean | 'proximity';
    /** Hide scrollbar */
    hideScrollbar?: boolean;
    /** Show gradient fade edges for scroll indication */
    fadeEdges?: boolean;
    /** Custom gutter/margin value */
    gutter?: string;
    className?: string;
}
export interface BreakoutCarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /** Fixed width for the item (CSS value) */
    width?: string;
    className?: string;
}
export declare const BreakoutCarousel: React.ForwardRefExoticComponent<BreakoutCarouselProps & React.RefAttributes<HTMLDivElement>>;
export declare const BreakoutCarouselItem: React.ForwardRefExoticComponent<BreakoutCarouselItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BreakoutCarousel.d.ts.map