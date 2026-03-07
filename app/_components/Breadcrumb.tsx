import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Visible breadcrumb navigation that matches BreadcrumbList JSON-LD schema.
 * Usage: <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Kosten" }]} />
 * The last item (no href) is the current page.
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-0">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-2 text-gray-400" aria-hidden="true">›</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
