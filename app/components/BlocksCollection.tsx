import CalendarView from './CalendarView';
import {
  ContentBlockDataType,
  GenericContentBlock,
} from './GenericContentBlock';

export const BlocksCollection = ({
  blocks,
  bookings,
}: {
  blocks: any;
  bookings?: any;
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-16 gap-y-8">
      <div className="flex flex-col gap-y-8">
        {blocks.map((block: any, index: number) => {
          if (block.dataItem) {
            return (
              <GenericContentBlock
                key={index}
                block={block.dataItem?.data as ContentBlockDataType}
                first={index === 0}
                last={index === blocks.length - 1}
              />
            );
          }
        })}
      </div>
      {bookings && (
        <CalendarView
          items={bookings}
          className="max-w-[300px] md:max-w-full mx-auto lg:mx-0 h-min relative lg:sticky lg:top-40 lg:mt-20 z-40 lg:float-right"
        />
      )}
    </div>
  );
};
