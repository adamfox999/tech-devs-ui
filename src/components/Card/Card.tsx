/**
 * M3 Card Component
 * 
 * Material Design 3 card with multiple variants including cinematic hero style.
 * Supports: elevated, filled, outlined, hero (full-bleed background image)
 * 
 * Class Prefix: .ui-card (per DESIGN_SYSTEM.MD spec)
 * 
 * @see https://m3.material.io/components/cards/overview
 */
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import styles from './Card.module.css';

const cardVariants = cva(
  styles['ui-card'],
  {
    variants: {
      variant: {
        elevated: styles['ui-card--elevated'],
        filled: styles['ui-card--filled'],
        outlined: styles['ui-card--outlined'],
        hero: styles['ui-card--hero'],
      },
      interactive: {
        true: styles['ui-card--interactive'],
        false: '',
      },
      aspectRatio: {
        auto: '',
        square: styles['ui-card--aspect-square'],
        '4/3': styles['ui-card--aspect-4-3'],
        '3/2': styles['ui-card--aspect-3-2'],
        '16/9': styles['ui-card--aspect-16-9'],
        '21/9': styles['ui-card--aspect-21-9'],
      },
    },
    defaultVariants: {
      variant: 'outlined',
      interactive: false,
      aspectRatio: 'auto',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, aspectRatio, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, interactive, aspectRatio }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/* Card sub-components */

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio for the media container */
  aspectRatio?: string;
  /** Background image URL (for hero variant) */
  src?: string;
  /** Alt text for the image */
  alt?: string;
}

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, aspectRatio = '16/9', src, alt, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles['ui-card__media'], className)}
      style={{ 
        aspectRatio,
        ...(src && { backgroundImage: `url(${src})` }),
        ...style 
      }}
      role={src ? 'img' : undefined}
      aria-label={src ? alt : undefined}
      {...props}
    >
      {children}
    </div>
  )
);

CardMedia.displayName = 'CardMedia';

/** Hero background - full-bleed image for hero variant */
const CardHeroBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string; alt?: string }
>(({ className, src, alt, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles['ui-card__hero-bg'], className)}
    style={style}
    {...props}
  >
    <img 
      src={src} 
      alt={alt || ''} 
      className={styles['ui-card__hero-bg-img']}
      loading="lazy"
    />
  </div>
));

CardHeroBackground.displayName = 'CardHeroBackground';

/** Scrim overlay for hero variant - gradient for text legibility */
const CardScrim = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    position?: 'bottom' | 'top' | 'full';
    intensity?: 'light' | 'medium' | 'heavy';
  }
>(({ className, position = 'bottom', intensity = 'medium', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      styles['ui-card__scrim'],
      styles[`ui-card__scrim--${position}`],
      styles[`ui-card__scrim--${intensity}`],
      className
    )}
    aria-hidden="true"
    {...props}
  />
));

CardScrim.displayName = 'CardScrim';

/** Hero content - overlaid content area for hero variant */
const CardHeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    position?: 'bottom-left' | 'bottom-center' | 'center' | 'top-left';
  }
>(({ className, position = 'bottom-left', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      styles['ui-card__hero-content'],
      styles[`ui-card__hero-content--${position}`],
      className
    )}
    {...props}
  />
));

CardHeroContent.displayName = 'CardHeroContent';

/** Badge overlay for hero cards */
const CardBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(styles['ui-card__badge'], className)}
    {...props}
  />
));

CardBadge.displayName = 'CardBadge';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles['ui-card__header'], className)} {...props} />
));

CardHeader.displayName = 'CardHeader';

const CardHeadline = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn(styles['ui-card__headline'], className)} {...props} />
));

CardHeadline.displayName = 'CardHeadline';

const CardSubhead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn(styles['ui-card__subhead'], className)} {...props} />
));

CardSubhead.displayName = 'CardSubhead';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles['ui-card__content'], className)} {...props} />
));

CardContent.displayName = 'CardContent';

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles['ui-card__actions'], className)} {...props} />
));

CardActions.displayName = 'CardActions';

export {
  Card,
  CardMedia,
  CardHeroBackground,
  CardScrim,
  CardHeroContent,
  CardBadge,
  CardHeader,
  CardHeadline,
  CardSubhead,
  CardContent,
  CardActions,
  cardVariants,
};
