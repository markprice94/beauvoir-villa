/* eslint-disable jsx-a11y/alt-text */
'use client';
import 'react-multi-carousel/lib/styles.css';

import {
  convertToNextImageProps,
  getImageProps,
} from '@app/utils/wix-media-image';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const RoomsCollection = ({
  rooms,
}: {
  rooms: (Record<string, any> | null | undefined)[];
}) => {
  if (!rooms) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {rooms.map((room, index) => {
        if (!room) {
          return null;
        }
        const {
          roomImage,
          title,
          description,
          roomFeatures,
          footnote,
          otherImages,
        } = room.data;

        const otherRoomImages = otherImages
          ? otherImages.map((image: any) => image.src)
          : null;

        return (
          <div className="flex flex-col gap-y-8 relative" key={index}>
            <Carousel
              responsive={responsive}
              showDots={!!otherRoomImages}
              arrows={!!otherRoomImages}
              itemClass="first:mx-0 mx-4"
            >
              <div key={index} className="relative">
                <Image
                  {...convertToNextImageProps(getImageProps(roomImage))}
                  className="rounded-lg w-full"
                  style={{ objectFit: 'cover', aspectRatio: 16 / 9 }}
                />
              </div>
              {otherRoomImages &&
                otherRoomImages.map((image: any, roomPicIndex: number) => {
                  if (!image) return null;
                  return (
                    <div key={roomPicIndex} className="relative">
                      <Image
                        {...convertToNextImageProps(getImageProps(image))}
                        className="rounded-lg w-full"
                        style={{ objectFit: 'cover', aspectRatio: 16 / 9 }}
                      />
                    </div>
                  );
                })}
            </Carousel>
            <div className="flex flex-col justify-between flex-grow gap-y-8">
              <div>
                <h2>{title}</h2>
                <div
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div className="flex flex-wrap gap-x-8 justify-start h5 text-grey-site">
                {roomFeatures.map((feature: string, index: number) => (
                  <div className="flex gap-x-2" key={index}>
                    <p>-</p>
                    <p>{feature.toUpperCase()}</p>
                  </div>
                ))}
                {footnote && <p className="p2">{footnote}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
