import { Input } from './input';

type SearchProps = React.ComponentProps<'input'>;

export function Search(props: SearchProps) {
  return (
    <div className='relative'>
      <Input {...props} />
    </div>
  );
}
