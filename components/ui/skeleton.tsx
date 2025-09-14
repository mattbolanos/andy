import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "rounded-base bg-main/20 border-border animate-pulse border-2",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
