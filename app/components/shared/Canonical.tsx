'use client';

import { usePathname } from 'next/navigation';

export function Canonical() {
  const pathname = usePathname();
  const canonicalUrl = `https://arialnarrow.com${pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
