'use client';
import { CircleHelp } from 'lucide-react';
import { Search } from './search';
import { Checkbox } from './checkbox';
import { Progress } from './progress';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { properName } from '@/lib/utils';

type DataCardProps = {
  title: string;
  data: Record<string | 'not_filled_in', number>;
  checkedItems: Record<string, boolean>;
  onCheckedItemsChange: Dispatch<
    SetStateAction<Record<string, Record<string, boolean>>>
  >;
  totalSelected: number;
};

type DataItemProps = {
  text: string;
  percentage: number;
  value: number;
  id: string;
  title: string;
  onCheck: (id: string, value: boolean) => void;
  isChecked: boolean;
};

function reduceData(
  data: Record<string | 'not_filled_in', number>,
  totalSelected: number = 0,
) {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  const notFilledIn = data['not_filled_in'];
  const divisor = Math.max(totalSelected + 1, 1);

  function getPercentage(value: number) {
    return Math.round((value / total) * 100);
  }

  return [
    {
      id: 'not_filled_in',
      text: 'Not filled in',
      percentage: getPercentage(notFilledIn),
      value: notFilledIn,
    },
    ...Object.entries(data)
      .filter(([key]) => key !== 'not_filled_in')
      .map(([key, value]) => {
        const newValue = Math.round(value / divisor);
        return {
          id: key,
          text: properName(key as string),
          percentage: getPercentage(newValue),
          value: newValue,
        };
      }),
  ];
}

export function DataItem({
  text,
  percentage,
  value,
  id,
  title,
  onCheck,
  isChecked,
}: DataItemProps) {
  const htmlId = `${title}-${id}`;

  return (
    <div className='flex flex-col items-center space-x-2 w-full border-b border-b-gray-200 py-3 gap-[2px]'>
      <div className='flex w-full gap-3 items-center'>
        <div className='flex ps-1 gap-3 items-center'>
          <Checkbox
            id={htmlId}
            onCheckedChange={(val) => onCheck(id, Boolean(val))}
            checked={isChecked}
          />
          <label
            htmlFor={htmlId}
            className='text-lg font-medium text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none'>
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

export function DataCard({
  title: _title,
  data,
  checkedItems,
  onCheckedItemsChange,
  totalSelected,
}: DataCardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateData, setStateData] = useState(reduceData(data, totalSelected));
  const title = properName(_title);
  const hasChecked = Object.values(checkedItems).some((val) => val);

  function onCheckItem(id: string, value: boolean) {
    onCheckedItemsChange((prev) => {
      return {
        ...prev,
        [_title]: {
          ...prev[_title],
          [id]: value,
        },
      };
    });
  }

  function onUnselectAll() {
    onCheckedItemsChange((prev) => {
      return {
        ...prev,
        [_title]: Object.keys(prev[_title]).reduce((acc, key) => {
          return {
            ...acc,
            [key]: false,
          };
        }, {}),
      };
    });
  }

  useEffect(() => {
    setStateData(reduceData(data, totalSelected));
  }, [checkedItems, totalSelected, data]);

  useEffect(() => {
    setStateData(
      reduceData(data).filter((item) => {
        const rgx = new RegExp(searchTerm, 'i');

        return rgx.test(item.text);
      }),
    );
  }, [searchTerm, data]);

  return (
    <div className='flex flex-col p-5 gap-6 rounded-xl border border-gray-200 shadow-lg w-full max-h-[600px] overflow-hidden'>
      <div className='flex'>
        <div className='flex gap-2 items-center text-gray-900 font-semibold'>
          {title}
          <span className='text-gray-400'>
            <CircleHelp size={16} />
          </span>
        </div>

        {hasChecked && (
          <button
            className='text-sm text-gray-500 font-semibold ms-auto'
            onClick={onUnselectAll}>
            Unselect All
          </button>
        )}
      </div>

      <Search
        placeholder='Search'
        className='bg-base-white'
        value={searchTerm}
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
      <div className='flex flex-col overflow-y-auto pe-3'>
        {stateData.map((item) => (
          <DataItem
            key={item.id}
            title={_title}
            {...item}
            onCheck={onCheckItem}
            isChecked={checkedItems[item.id]}
          />
        ))}
      </div>
    </div>
  );
}
