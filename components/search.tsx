import { Input } from './input';
import { Search as SearchIcon } from 'lucide-react';

type SearchProps = React.ComponentProps<'input'>;

export function Search(props: SearchProps) {
  return (
    <div className='relative'>
      <Input {...props} />
      <span className='absolute right-0 top-0 flex items-center h-full pe-4 text-gray-500'>
        <SearchIcon className='' />
      </span>
    </div>
  );
}
