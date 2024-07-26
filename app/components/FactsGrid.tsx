import { BedIcon } from './Icons/Bed';
import { LeafIcon } from './Icons/Leaf';
import { PoolIcon } from './Icons/Pool';

export default function FactsGrid({
  facts,
}: {
  facts?: (Record<string, any> | null | undefined)[];
}) {
  if (!facts) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-x-8 justify-start gap-y-2 md:items-end mt-8">
      <div className="flex gap-x-4">
        <LeafIcon className="w-8 h-8" />
        <h6 className="self-center">Rural Setting</h6>
      </div>
      <div className="flex gap-x-4">
        <BedIcon className="w-8 h-8" />
        <h6 className="self-center">Sleeps 8</h6>
      </div>
      <div className="flex gap-x-4">
        <PoolIcon className="w-8 h-8" />
        <h6 className="self-center">10m x 5m Heated Pool</h6>
      </div>
    </div>
  );
}
