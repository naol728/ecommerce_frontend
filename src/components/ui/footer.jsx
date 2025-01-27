import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-black pb-4 pt-12 text-neutral-100 dark:bg-neutral-950 dark:text-neutral-50",
      className
    )}
    {...props}
  />
));
Footer.displayName = "Footer";

const FooterContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
      className
    )}
    {...props}
  />
));
FooterContent.displayName = "FooterContent";

const FooterColumn = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
FooterColumn.displayName = "FooterColumn";

const FooterBottom = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs text-neutral-500 sm:flex-row dark:text-neutral-400",
      className
    )}
    {...props}
  />
));
FooterBottom.displayName = "FooterBottom";

export { Footer, FooterColumn, FooterBottom, FooterContent };
