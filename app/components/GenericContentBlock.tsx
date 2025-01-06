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
  const sideBySide = blockType === 'sideBySide';
  return (
    <div className="flex flex-col gap-y-4">
      <h2>{title}</h2>
      {image && (
        <div
          className={classNames(
            sideBySide
              ? 'grid-cols-1 lg:grid-cols-[1fr_2fr] items-center'
              : 'grid-cols-1',
            'grid gap-x-4 gap-y-4'
          )}
        >
          {otherImages ? (
            <Carousel responsive={responsive} autoPlay>
              <Image
                {...convertToNextImageProps(getImageProps(image))}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {secondaryImages &&
                secondaryImages.map((image, index) => (
                  <Image
                    key={`Image ${index + 2}`}
                    {...convertToNextImageProps(getImageProps(image))}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ))}
            </Carousel>
          ) : (
            <Image
              {...convertToNextImageProps(getImageProps(image))}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          {copy && (
            <div
              className="content-block-rtf max-w-3xl"
              dangerouslySetInnerHTML={{ __html: copy }}
            />
          )}
        </div>
      )}
      {link && (
        <Link className="btn-main border mr-auto" href={link}>
          {linkText ?? link}
        </Link>
      )}
    </div>
  );
};
