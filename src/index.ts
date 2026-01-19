/**
 * @tech-devs/ui
 * 
 * Tech Devs Design System - Shared UI components and tokens
 * 
 * @example
 * ```tsx
 * import { Button, Card, Dialog } from '@tech-devs/ui';
 * import '@tech-devs/ui/style.css';
 * ```
 */

// Utilities
export { cn } from './lib/utils';

// Button
export { Button, buttonVariants } from './components/Button';
export type { ButtonProps } from './components/Button';

// Card
export {
  Card,
  CardMedia,
  CardHeader,
  CardHeadline,
  CardSubhead,
  CardContent,
  CardActions,
  CardHeroBackground,
  CardScrim,
  CardHeroContent,
  CardBadge,
  cardVariants,
} from './components/Card';
export type { CardProps } from './components/Card';

// Chip
export { Chip, ChipGroup, chipVariants } from './components/Chip';
export type { ChipProps, ChipGroupProps } from './components/Chip';

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogDescription,
  DialogActions,
} from './components/Dialog';

// Divider
export { Divider, DividerWithText } from './components/Divider';
export type { DividerProps, DividerWithTextProps } from './components/Divider';

// FAB
export { FAB, fabVariants } from './components/FAB';
export type { FABProps } from './components/FAB';

// IconButton
export { IconButton, iconButtonVariants } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';

// List
export {
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemAvatar,
  ListItemImage,
  ListItemTrailingText,
  ListItemTrailingIcon,
} from './components/List';
export type {
  ListProps,
  ListItemProps,
  ListSubheaderProps,
  ListItemIconProps,
  ListItemAvatarProps,
  ListItemImageProps,
  ListItemTrailingTextProps,
} from './components/List';

// Menu
export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuRadioGroup,
  MenuSeparator,
  MenuLabel,
  MenuGroup,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
} from './components/Menu';
export type {
  MenuContentProps,
  MenuItemProps,
  MenuCheckboxItemProps,
  MenuSubTriggerProps,
} from './components/Menu';

// ProgressIndicator
export { LinearProgress, CircularProgress, ProgressIndicator } from './components/ProgressIndicator';
export type { LinearProgressProps, CircularProgressProps } from './components/ProgressIndicator';

// SearchBar
export { SearchBar, SearchView, SearchSuggestion, SearchSectionHeader } from './components/SearchBar';
export type {
  SearchBarProps,
  SearchViewProps,
  SearchSuggestionProps,
  SearchSectionHeaderProps,
} from './components/SearchBar';

// Slider
export { Slider, RangeSlider } from './components/Slider';
export type { SliderProps, RangeSliderProps } from './components/Slider';

// Snackbar
export {
  SnackbarProvider,
  SnackbarViewport,
  Snackbar,
  SnackbarMessage,
  SnackbarAction,
  SnackbarClose,
} from './components/Snackbar';

// TextField
export { TextField, textFieldVariants } from './components/TextField';
export type { TextFieldProps } from './components/TextField';

// TopAppBar
export { TopAppBar, AppBarAction, useAppBarScroll } from './components/TopAppBar';
export type { TopAppBarProps, AppBarActionProps, UseAppBarScrollOptions } from './components/TopAppBar';

// BottomNavigation
export { BottomNavigation, BottomNavigationItem } from './components/BottomNavigation';
export type { BottomNavigationProps, BottomNavigationItemProps } from './components/BottomNavigation';

// NavigationRail - Light DOM Web Components with React Wrappers
export {
  // React components
  NavigationRailProvider,
  NavigationRail,
  NavigationRailHeader,
  NavigationRailFAB,
  NavigationRailContent,
  NavigationRailGroup,
  NavigationRailItem,
  NavigationRailDivider,
  NavigationRailFooter,
  NavigationRailUser,
  NavigationRailToggle,
  NavigationRailOverlay,
  NavigationRailTrigger,
  useNavigationRail,
} from './components/NavigationRail';

// Section
export { Section } from './components/Section';
export type { SectionProps } from './components/Section';

// Container
export { Container } from './components/Container';
export type { ContainerProps } from './components/Container';

// BreakoutCarousel
export { BreakoutCarousel, BreakoutCarouselItem } from './components/BreakoutCarousel';
export type { BreakoutCarouselProps, BreakoutCarouselItemProps } from './components/BreakoutCarousel';