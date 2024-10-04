/* eslint-disable jsx-a11y/alt-text */
'use client';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import {
  convertToNextImageProps,
  getImageProps,
} from '@app/utils/wix-media-image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import classNames from 'classnames';

export type ContentBlockDataType = {
  preHeader?: string;
  title: string;
  copy?: string;
  image?: string;
  otherImages?: { src: string }[];
  pageAnchorId?: string;
  link?: string;
  linkText?: string;
  blockType?: string;
  showTitle?: boolean;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const GenericContentBlock = ({
  block,
  last,
  first,
}: {
  block?: ContentBlockDataType | null;
  last?: boolean;
  first?: boolean;
}) => {
  if (!block) {
    return null;
  }
  const {
    preHeader,
    title,
    copy,
    image,
    otherImages,
    pageAnchorId,
    link,
    linkText,
    blockType,
    showTitle,
  } = block;

  const secondaryImages = otherImages?.map((img) => img.src);

  return (
    <div
      id={pageAnchorId ?? title.toLowerCase().replace(' ', '-')}
      className={classNames(
        blockType === 'sideBySide' ? 'flex-row items-center' : 'flex-col',
        first && 'pt-12 md:pt-20',
        last && 'pb-12 md:pb-20',
        'flex flex-wrap'
      )}
    >
      {preHeader && <h4 className="w-full">{preHeader.toUpperCase()}</h4>}
      {showTitle && <h2 className="w-full">{title}</h2>}

      <div
        className={classNames(
          blockType === 'sideBySide' && 'w-1/2',
          'max-w-[50vw] rounded-md md:rounded-lg'
        )}
      >
        {image && !otherImages && (
          <Image
            {...convertToNextImageProps(getImageProps(image))}
            style={{ objectFit: 'contain' }}
            className="rounded-md md:rounded-lg max-sm:max-w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}

        {otherImages && (
          <Carousel
            responsive={responsive}
            arrows={false}
            autoPlay
            partialVisbile={false}
            autoPlaySpeed={3000}
            infinite
            draggable={false}
            swipeable={false}
          >
            <div key="main-image" className="relative">
              <Image
                {...convertToNextImageProps(getImageProps(image))}
                style={{ objectFit: 'cover', aspectRatio: 16 / 9 }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md md:rounded-lg"
              />
            </div>
            {secondaryImages &&
              secondaryImages.map((image: any, roomPicIndex: number) => {
                if (!image) return null;
                return (
                  <div key={roomPicIndex} className="relative">
                    <Image
                      {...convertToNextImageProps(getImageProps(image))}
                      style={{ objectFit: 'cover', aspectRatio: 16 / 9 }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-md md:rounded-lg"
                    />
                  </div>
                );
              })}
          </Carousel>
        )}
      </div>

      {copy && (
        <div
          className={classNames(
            blockType === 'sideBySide' ? 'ml-8 w-5/12' : 'mt-8',
            'content-block-rtf'
          )}
          dangerouslySetInnerHTML={{ __html: copy }}
        />
      )}
      {link && (
        <Link className="mr-auto btn-main py-1 px-4 border mt-8" href={link}>
          {linkText ?? link}
        </Link>
      )}
    </div>
  );
};
