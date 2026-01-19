"use client";

import * as React from "react";
import "./BreakoutCarousel.css";

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

export const BreakoutCarousel = React.forwardRef<HTMLDivElement, BreakoutCarouselProps>(
  (
    {
      children,
      gap,
      gutter,
      containerWidth,
      showArrows = false,
      snap = true,
      hideScrollbar = true,
      fadeEdges = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    // Merge refs
    React.useImperativeHandle(ref, () => scrollRef.current!);

    const updateScrollState = React.useCallback(() => {
      const el = scrollRef.current;
      if (!el) return;
      
      const left = el.scrollLeft > 1;
      const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      
      setCanScrollLeft(left);
      setCanScrollRight(right);
      
      // Update wrapper data attributes for CSS fade effect
      if (wrapperRef.current && fadeEdges) {
        wrapperRef.current.dataset.canScrollLeft = String(left);
        wrapperRef.current.dataset.canScrollRight = String(right);
      }
    }, [fadeEdges]);

    React.useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;

      updateScrollState();
      el.addEventListener("scroll", updateScrollState, { passive: true });
      
      // Also update on resize
      const resizeObserver = new ResizeObserver(updateScrollState);
      resizeObserver.observe(el);

      return () => {
        el.removeEventListener("scroll", updateScrollState);
        resizeObserver.disconnect();
      };
    }, [updateScrollState]);

    const scroll = (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;

      // Calculate scroll amount based on first item width or 80% of viewport
      const firstChild = el.firstElementChild as HTMLElement | null;
      const itemWidth = firstChild?.offsetWidth || el.clientWidth * 0.8;
      const scrollAmount = Math.min(itemWidth * 2, el.clientWidth * 0.85);
      
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    };

    const wrapperClasses = [
      "ui-breakout-carousel-wrapper",
      fadeEdges && "ui-breakout-carousel-wrapper--fade-edges",
    ].filter(Boolean).join(" ");

    const trackClasses = [
      "ui-breakout-carousel",
      snap === true && "ui-breakout-carousel--snap",
      snap === 'proximity' && "ui-breakout-carousel--snap-proximity",
      hideScrollbar && "ui-breakout-carousel--no-scrollbar",
      className,
    ].filter(Boolean).join(" ");

    const cssVars = {
      "--carousel-gap": gap,
      "--carousel-gutter": gutter,
      "--carousel-container-width": containerWidth,
      ...style,
    } as React.CSSProperties;

    return (
      <div ref={wrapperRef} className={wrapperClasses}>
        <div
          ref={scrollRef}
          className={trackClasses}
          style={cssVars}
          {...props}
        >
          {children}
        </div>

        {showArrows && (
          <div className="ui-breakout-carousel__nav">
            <button
              type="button"
              className="ui-breakout-carousel__arrow ui-breakout-carousel__arrow--left"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="ui-breakout-carousel__arrow ui-breakout-carousel__arrow--right"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

BreakoutCarousel.displayName = "BreakoutCarousel";

export const BreakoutCarouselItem = React.forwardRef<HTMLDivElement, BreakoutCarouselItemProps>(
  ({ children, width, className, style, ...props }, ref) => {
    const classes = [
      "ui-breakout-carousel__item",
      className,
    ].filter(Boolean).join(" ");

    const cssVars = {
      "--carousel-item-width": width,
      ...style,
    } as React.CSSProperties;

    return (
      <div ref={ref} className={classes} style={cssVars} {...props}>
        {children}
      </div>
    );
  }
);

BreakoutCarouselItem.displayName = "BreakoutCarouselItem";
