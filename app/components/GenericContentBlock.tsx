/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import {
  convertToNextImageProps,
  getImageProps,
} from '@app/utils/wix-media-image';

export type ContentBlockDataType = {
  preHeader?: string;
  title: string;
  copy?: string;
  image?: string;
  pageAnchorId?: string;
};
export const GenericContentBlock = ({
  block,
}: {
  block?: ContentBlockDataType | null;
}) => {
  if (!block) {
    return null;
  }
  const { preHeader, title, copy, image, pageAnchorId } = block;
  return (
    <div
      id={pageAnchorId ?? title.toLowerCase().replace(' ', '-')}
      className="py-12 md:py-20 flex flex-col gap-y-8"
    >
      {preHeader && <h4>{preHeader.toUpperCase()}</h4>}
      <h2>{title}</h2>

      {image && (
        <Image
          {...convertToNextImageProps(getImageProps(image))}
          style={{ objectFit: 'contain' }}
          className="rounded-md md:rounded-lg max-sm:max-w-full max-w-[60vw]"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      )}
      {copy && (
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: copy }} />
      )}
    </div>
  );
};
