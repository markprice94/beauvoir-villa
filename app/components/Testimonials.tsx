import { CMSCollection } from '@app/hooks/useWixClientServer';
import { WixImageType, WixMediaImage } from './Image/WixMediaImage';

interface ReviewItem {
  name: string;
  reviewText: string;
  mainImage?: any;
}

export const Testimonials = ({
  items,
  background,
}: {
  items: CMSCollection;
  background: WixImageType;
}) => {
  return (
    <div className="flex flex-col gap-y-2 relative py-12">
      <div className="absolute top-0 bottom-0 w-full opacity-50">
        <WixMediaImage
          media={background.src}
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>

      <h5 className="mx-8 z-10">TESTIMONIALS</h5>
      <div className="grid lg:grid-cols-3 justify-center mx-4">
        {items.map((item, i) => {
          const { name, reviewText, mainImage } = item.data as ReviewItem;
          return (
            <div
              key={i}
              className="z-10 basis-1/3 h-40 lg:h-64 flex flex-col gap-y-4 justify-between bg-black text-white p-4 m-4 border border-white rounded-lg"
            >
              <p>{`"${reviewText}"`}</p>
              <div className="flex items-center gap-x-4">
                <div className="relative h-12 w-12">
                  <WixMediaImage
                    media={mainImage}
                    alt="Picture of person reviewing Beauvoir Villa"
                    className="rounded-full"
                  />
                </div>
                <p>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
