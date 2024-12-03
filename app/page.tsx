'use client';
import { DataCard } from '@/components/data-card';
import { data, defaultData } from '@/lib/data';
import { properName } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

type TagProps = {
  title: string;
  value: string;
};
function Tag({ title, value }: TagProps) {
  if (!value) return null;

  return (
    <div className='bg-base-white rounded-md px-2 py-1 border-gray-300 text-gray-700 text-xs font-medium'>
      {properName(title)} = {value}
    </div>
  );
}

export default function Home() {
  const [checkedData, setCheckedData] = useState(defaultData);
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>(
    {},
  );
  const hasSelected = Object.values(checkedData).some((data) =>
    Object.values(data).some((value) => value),
  );
  const totalSelected = Object.values(checkedData).reduce(
    (acc, data) =>
      acc +
      Object.values(data).reduce((acc, value) => acc + (value ? 1 : 0), 0),
    0,
  );

  useEffect(() => {
    const checkedItems = Object.keys(checkedData).reduce((acc, key) => {
      const text = Object.keys(checkedData[key])
        .filter((item) => checkedData[key][item])
        .map((item) => properName(item))
        .join(',')
        .trim();

      return {
        ...acc,
        [key]: text,
      };
    }, {});

    setSelectedItems(checkedItems);
  }, [checkedData]);

  return (
    <>
      <div className='flex flex-col p-8 gap-8'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-gray-900 text-3xl font-semibold'>All datas</h1>
          <p className='text-gray-600'>
            Track, manage, and analyze your user datas.
          </p>
        </div>

        <div className='grid gap-6 grid-cols-3'>
          {Object.keys(data).map((key) => (
            <DataCard
              key={key}
              title={key}
              data={data[key]}
              checkedItems={checkedData[key]}
              onCheckedItemsChange={setCheckedData}
              totalSelected={totalSelected}
            />
          ))}
        </div>
      </div>

      {hasSelected && (
        <div className='w-full shadow-md border-t border-gray-200 py-4 px-8 bg-white sticky bottom-0 flex items-center animate-in slide-in-from-bottom'>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5'>
              <h1 className='text-gray-900 text-xl font-bold'>Selected</h1>
              <button
                className='text-sm text-gray-500 font-semibold'
                onClick={() => setCheckedData(defaultData)}>
                Unselect All
              </button>
            </div>

            <div className='flex gap-3'>
              {Object.keys(selectedItems).map((key) => (
                <Tag key={key} title={key} value={selectedItems[key]} />
              ))}
            </div>
          </div>

          <button className='rounded-lg border-sky-600 bg-sky-600 text-white h-[44px] font-semibold px-4 ms-auto flex items-center gap-2'>
            <Plus />
            Create Segment
          </button>
        </div>
      )}
    </>
  );
}
