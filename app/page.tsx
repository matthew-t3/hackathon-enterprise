import { DataCard } from '@/components/data-card';
import { data } from '@/lib/data';

export default function Home() {
  return (
    <div className='flex flex-col p-8 gap-8'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-gray-900 text-3xl font-semibold'>All datas</h1>
        <p className='text-gray-600'>
          Track, manage, and analyze your user datas.
        </p>
      </div>

      <div className='grid gap-6 grid-cols-3'>
        {Object.keys(data).map((key) => (
          <DataCard key={key} title={key} data={data[key]} />
        ))}
      </div>
    </div>
  );
}
