import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "filled" | "outlined" | "elevated" | "hero" | null | undefined;
    interactive?: boolean | null | undefined;
    aspectRatio?: "square" | "auto" | "4/3" | "3/2" | "16/9" | "21/9" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    asChild?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Aspect ratio for the media container */
    aspectRatio?: string;
    /** Background image URL (for hero variant) */
    src?: string;
    /** Alt text for the image */
    alt?: string;
}
declare const CardMedia: React.ForwardRefExoticComponent<CardMediaProps & React.RefAttributes<HTMLDivElement>>;
/** Hero background - full-bleed image for hero variant */
declare const CardHeroBackground: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    src: string;
    alt?: string;
} & React.RefAttributes<HTMLDivElement>>;
/** Scrim overlay for hero variant - gradient for text legibility */
declare const CardScrim: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    position?: "bottom" | "top" | "full";
    intensity?: "light" | "medium" | "heavy";
} & React.RefAttributes<HTMLDivElement>>;
/** Hero content - overlaid content area for hero variant */
declare const CardHeroContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    position?: "bottom-left" | "bottom-center" | "center" | "top-left";
} & React.RefAttributes<HTMLDivElement>>;
/** Badge overlay for hero cards */
declare const CardBadge: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeadline: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardSubhead: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Card, CardMedia, CardHeroBackground, CardScrim, CardHeroContent, CardBadge, CardHeader, CardHeadline, CardSubhead, CardContent, CardActions, cardVariants, };
//# sourceMappingURL=Card.d.ts.map