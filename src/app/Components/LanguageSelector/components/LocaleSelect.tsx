'use client';

import { usePathname, useRouter } from "../../../../i18n/routing";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultLocale: string;
  label: string;
}

export default function LocaleSelect({ children, defaultLocale }: Props) {

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {

    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: nextLocale }
      )
    });
  }

  return (
    <div className="formselctor w-form">
      <div>
        <select defaultValue={defaultLocale} disabled={isPending} onChange={handleSelect} className="country-select w-select" >
          {children}
        </select>
      </div>
    </div>
  )

}