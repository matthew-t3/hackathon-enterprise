'use client';
import { CircleHelp } from 'lucide-react';
import { Search } from './search';
import { Checkbox } from './checkbox';
import { Progress } from './progress';

type DataCardProps = {
  title: string;
  data: Record<string | 'not_filled_in', number>;
};

type DataItemProps = {
  text: string;
  percentage: number;
  value: number;
};

function properName(name: string) {
  const words = name.split('_');
  return words.reduce((acc, word) => {
    return acc + ' ' + word[0].toUpperCase() + word.slice(1);
  }, '');
}

function reduceData(data: Record<string | 'not_filled_in', number>) {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  // Put 'not-filled-in' at the start of the list
  const notFilledIn = data['not_filled_in'];

  return [
    {
      text: 'Not filled in',
      percentage: Math.round((notFilledIn / total) * 100),
      value: notFilledIn,
    },
    ...Object.entries(data)
      .filter(([key]) => key !== 'not_filled_in')
      .map(([key, value]) => {
        return {
          text: properName(key as string),
          percentage: Math.round((value / total) * 100),
          value,
        };
      }),
  ];
}

export function DataItem({ text, percentage, value }: DataItemProps) {
  return (
    <div className='flex flex-col items-center space-x-2 w-full border-b border-b-gray-200 py-3 gap-[2px]'>
      <div className='flex w-full gap-3 items-center'>
        <div className='flex ps-1 gap-3 items-center'>
          <Checkbox id='terms' />
          <label
            htmlFor='terms'
            className='text-lg font-medium text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            {text}
          </label>
        </div>

        <p className='ms-auto text-lg text-gray-800'>{value}</p>
      </div>

      <div className='flex w-full gap-3 items-center ps-6'>
        <Progress value={percentage} />
        <span className='text-gray-400 text-sm font-black'>{percentage}%</span>
      </div>
    </div>
  );
}

export function DataCard({ title: _title, data }: DataCardProps) {
  const title = properName(_title);
  const reducedData = reduceData(data);

  return (
    <div className='flex flex-col p-5 gap-6 rounded-xl border border-gray-200 shadow-lg w-full max-h-[600px] overflow-hidden'>
      <div className='flex gap-2 items-center text-gray-900 font-semibold'>
        {title}
        <span className='text-gray-400'>
          <CircleHelp size={16} />
        </span>
      </div>
      <Search placeholder='Search' className='bg-base-white' />
      <div className='flex flex-col overflow-y-auto pe-3'>
        {reducedData.map((item) => (
          <DataItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
}
