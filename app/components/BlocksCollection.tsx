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
    <div className="flex flex-col lg:flex-row lg:gap-x-8">
      <div>
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
          className="lg:w-1/4 h-min relative lg:sticky lg:top-40 lg:mt-20 z-40 lg:float-right"
        />
      )}
    </div>
  );
};
