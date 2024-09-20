/* eslint-disable jsx-a11y/alt-text */
import {
  getImageProps,
  convertToNextImageProps,
} from '@app/utils/wix-media-image';
import Image from 'next/image';

export type ReviewCollectionType = {
  dataCollectionId?: string;
  data?: {
    name: string;
    reviewText: string;
    reviewImage?: string;
    reviewTitle: string;
    _id: string;
    title: string;
  } | null;
  _id: string;
}[];

export const Testimonials = ({
  reviews,
  background,
}: {
  reviews: ReviewCollectionType;
  background?: any;
}) => {
  const reviewData = reviews.map((review) => {
    if (!review) {
      return null;
    }
    return review.data;
  });
  return (
    <div className="flex flex-col gap-y-2 relative md:py-12">
      {background && (
        <div className="grid">
          <Image
            {...convertToNextImageProps(getImageProps(background.src))}
            style={{ objectFit: 'cover' }}
            className="w-full opacity-50 md:row-span-3 md:row-start-1 col-span-full md:h-full h-0"
            sizes="100vw"
          />
          <div className="row-start-2 col-span-full md:mx-16 my-24 md:my-0">
            <h5 className="mx-8 z-10">GUEST REVIEWS</h5>
            <div className="grid lg:grid-cols-3 justify-center mx-4">
              {reviewData.map((item, i) => {
                if (!item) {
                  return null;
                }
                return (
                  <div
                    key={i}
                    className="z-10 basis-full md:basis-1/3 flex flex-col gap-y-4 justify-end bg-black text-white p-4 m-4 border border-white rounded-lg"
                  >
                    <p className="flex-grow self-center my-auto">
                      {item.reviewText}
                    </p>
                    <div className="flex items-center gap-x-4 relative">
                      <div className="md:relative h-12 w-12 absolute max-md:-right-6 max-md:-bottom-6 max-md:rotate-12">
                        {item.reviewImage ? (
                          <Image
                            {...convertToNextImageProps(
                              getImageProps(item.reviewImage)
                            )}
                            style={{ objectFit: 'cover' }}
                            className="rounded-full h-full"
                          />
                        ) : (
                          <Image
                            src="/images/villa_shutters.jpg"
                            style={{ objectFit: 'cover', aspectRatio: 1 / 1 }}
                            width={300}
                            height={200}
                            className="rounded-full"
                            alt="Villa Beavoir guest"
                          />
                        )}
                      </div>
                      <p className="p2">{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
