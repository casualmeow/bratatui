import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group bg-accent-foreground text-accent"
      style={
        {
          "--normal-bg": "hsl(var(--accent-foreground))",
          "--normal-text": "hsl(var(--accent))",
          "--secondary-text": "hsl(var(--accent-foreground))",
          "--normal-border": "hsl(var(--border))",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
