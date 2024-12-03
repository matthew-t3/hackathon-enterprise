import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className='px-6 flex items-center bg-gray-900 text-white h-[82px]'>
      <div className='flex gap-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='32'
          viewBox='0 0 33 32'
          fill='none'>
          <path
            d='M18.455 8.32987L13.6527 0L0 23.6252L4.81122 31.9551L9.61346 23.6252L14.4696 32L19.2718 23.6701L14.4247 15.2954L18.455 8.32987Z'
            fill='#FCFCFD'
          />
          <path
            d='M13.6528 0L18.4551 8.32987H31.4166L26.6054 0H13.6528Z'
            fill='#8DC6EA'
          />
          <path
            d='M19.2717 23.6701L32.1525 23.6611L27.3503 31.991L14.4695 32L19.2717 23.6701Z'
            fill='#8DC6EA'
          />
          <path
            d='M27.3862 15.2955L31.4165 8.32996H23.3379L19.2717 15.3314L24.1009 23.6612H32.1525L27.3862 15.2955Z'
            fill='#2B5D81'
          />
        </svg>

        <div className='rounded-md bg-gray-700 flex items-center py-2 px-3 font-semibold'>
          Acme - Dashboard
        </div>
      </div>

      <div className='flex ms-auto gap-4 items-center'>
        <Bell />
        <div className='rounded-full bg-gray-100 size-10 flex items-center justify-center text-gray-600'>
          OR
        </div>
      </div>
    </header>
  );
}
