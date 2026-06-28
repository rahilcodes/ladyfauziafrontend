"use client";

import { AttributeData, AttributeOptionNode } from "@/types/types";
import { createUrl, getValidTitle } from "@/utils/helper";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function VariantSelector({
  variants,
  setUserInteracted,
}: {
  variants: AttributeData[];
  setUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  possibleOptions: Record<string, number[]>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  if (!variants?.length) return null;

  return (
    <>
      {variants.map((option , index : number) => {
        const attributeCode = option.code;
        const _isAlreadySelected = searchParams.has(attributeCode);
        return (
          <dl key={`${option.id} + ${index}` } className="mb-8">
            <dt className="mb-4 text-sm capitalize tracking-wide">
              {getValidTitle(attributeCode)}
            </dt>

            <dd className="flex flex-wrap gap-3">
              {(option.options as AttributeOptionNode[]).map((node) => {
                const isActive = searchParams.get(attributeCode) === String(node.id);
                const isAvailable = node?.isValid;
                const nextParams = new URLSearchParams(searchParams.toString());
                nextParams.set(attributeCode, String(node.id));

                const optionUrl = createUrl(pathname, nextParams);

                return (
                  <button
                    key={node.id}
                    disabled={!isAvailable}
                    onClick={() => {
                      if (!isAvailable) return;
                      router.replace(optionUrl, { scroll: false });
                      setUserInteracted(true);
                    }}
                    className={clsx(
                      "flex min-w-12 cursor-pointer items-center justify-center rounded-none border border-[#EAE5DA] bg-transparent px-4.5 py-2.5 text-xs tracking-wider uppercase font-medium dark:border-[#262626]",
                      {
                        "cursor-default border-[#C5A880] ring-[1px] ring-[#C5A880] text-primary": isActive,
                        "hover:border-primary transition duration-300 ease-in-out":
                          !isActive && isAvailable,
                        "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100/50 text-neutral-300 border-[#EAE5DA] dark:bg-neutral-900/50 dark:text-neutral-600 dark:border-neutral-800 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform before:dark:bg-neutral-700":
                          !isAvailable,
                      }
                    )}
                  >
                    {node.label || node.adminName}
                  </button>
                );
              })}
            </dd>
          </dl>
        );
      })}
    </>
  );
}
