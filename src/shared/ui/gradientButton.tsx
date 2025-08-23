import { Button, type ButtonProps } from "@/shared/ui/button";
import { BottomGradient } from "./bottomGradient";
import { cn } from "@/shared/lib/utils";
// shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]
interface GradientButtonProps extends ButtonProps {}

export function GradientButton({
  className,
  variant,
  size,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      className={cn(
        "group/btn relative flex h-10 w-full items-center justify-center rounded-md px-4 font-medium bg-[#18CCFC]/70 text-accent",
        className,
      )}
      variant={variant}
      size={size}
      {...props}
    >
      {/* фон */}
      <BottomGradient />

      {/* контент */}
      <span className="relative z-10 flex flex-row items-center space-x-2">
        {children}
      </span>
    </Button>
  );
}
