import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SITE, telHref } from "@/lib/config";

export function TopUtilityBar() {
  return (
    <div className="hidden h-9 bg-brand-blue-900 text-[13px] text-neutral-300 lg:block">
      <div className="container-prose flex h-full items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
            {SITE.address.full}
          </span>
          <span aria-hidden className="text-neutral-700">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
            {SITE.hours}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={telHref(SITE.primaryPhone)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
            {SITE.primaryPhone}
          </a>
          <span aria-hidden className="text-neutral-700">
            ·
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
