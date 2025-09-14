import Link from "next/link";

export function QuickLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/reviews"
        prefetch
        className="text-muted-foreground hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        All Reviews
      </Link>
      <span className="text-muted-foreground">•</span>
      <Link
        href="/interviews"
        prefetch
        className="text-muted-foreground hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        All Interviews
      </Link>
      <span className="text-muted-foreground">•</span>
      <Link
        href="/production"
        prefetch
        className="text-muted-foreground hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        Production
      </Link>
    </div>
  );
}
