import { CircleHelp } from 'lucide-react';
import { Search } from './search';

type DataCardProps = {
  title: string;
};

export function DataCard({ title }: DataCardProps) {
  return (
    <div className='flex flex-col p-5 gap-6 rounded-xl border border-gray-200 shadow-lg'>
      <div className='flex gap-2 items-center text-gray-900 font-semibold'>
        {title}
        <span className='text-gray-400'>
          <CircleHelp size={16} />
        </span>
      </div>
      <Search placeholder='Search' />
    </div>
  );
}
