import Link from "next/link";

export function QuickLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/reviews"
        prefetch
        className="hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        All Reviews
      </Link>
      <span>•</span>
      <Link
        href="/features"
        prefetch
        className="hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        All Interviews
      </Link>
      <span>•</span>
      <Link
        href="/production"
        prefetch
        className="hover:text-main font-medium hover:underline hover:underline-offset-4"
      >
        Production
      </Link>
    </div>
  );
}
