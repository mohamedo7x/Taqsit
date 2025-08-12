import { cn } from "@/lib/utils";

const IconBadge = ({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  } as const;
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lg border bg-secondary text-foreground/80",
        sizes[size]
      )}
      aria-hidden
    >
      {children}
    </div>
  );
};

export default IconBadge;
