import { ProductCard } from "@components/catalog/product/ProductCard";
import { ProductsSectionProps } from "@components/catalog/type";
import { baseUrl, getImageUrl, NOT_IMAGE } from "@utils/constants";
import { resolveCardPrice } from "@utils/helper";

const Theme = ({ title, description, products }: ProductsSectionProps) => {
  return (
    <section className="pt-8 sm:pt-16 lg:pt-24">
      <div className="md:max-w-4.5xl mx-auto mb-8 w-full px-0 text-center md:text-start xss:mb-12">
        <h2 className="mb-3 font-cormorant text-2xl md:text-3xl font-light tracking-[0.18em] text-neutral-900 dark:text-neutral-100 uppercase pl-[2px]">
          {title}
        </h2>
        <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 dark:text-stone-400 pl-[2px] max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="w-full pb-6 pt-1">
        <ul className="m-0 grid grid-cols-2 justify-center gap-5 lg:gap-11.5 p-0 xss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => {
            const imageUrl = getImageUrl(
              item?.baseImageUrl,
              baseUrl,
              NOT_IMAGE,
            );
            const ProductPrice = resolveCardPrice(item);

            return (
              <ProductCard
                key={item.id ?? index}
                currency="USD"
                imageUrl={imageUrl || ""}
                price={String(ProductPrice)}
                product={{
                  urlKey: item.urlKey || item.sku,
                  name: item?.name || item.sku,
                  id: item.id,
                  type: item.type,
                  isSaleable: item.isSaleable,
                }}
                specialPrice={""}
                priority={index < 4}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Theme;
