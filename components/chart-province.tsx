import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/chart';
import { data } from '@/lib/data';
import { CircleHelp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

const chartConfig = {
  ny: {
    label: 'New York',
    color: 'hsl(var(--chart-7))',
  },
  ca: {
    label: 'California',
    color: 'hsl(var(--chart-8))',
  },
  tx: {
    label: 'Texas',
    color: 'hsl(var(--chart-9))',
  },
  not_filled_in: {
    label: 'Not Filled In',
    color: 'hsl(var(--chart-10))',
  },
} satisfies ChartConfig;

export function ProvinceChart() {
  const chartData = data['province_of_residence'];
  const transformedChartData = Object.entries(chartData).map(([key, value]) => {
    return {
      property: key,
      value,
      fill: `var(--color-${key})`,
    };
  });

  return (
    <div className='flex flex-col p-5 gap-6 rounded-xl border border-gray-200 shadow-lg w-full overflow-hidden'>
      <div className='flex'>
        <div className='flex gap-2 items-center text-gray-900 font-semibold'>
          Province Of Residence
          <span className='text-gray-400'>
            <CircleHelp size={16} />
          </span>
        </div>
      </div>

      <ChartContainer config={chartConfig} className='min-h-[400px]'>
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey='property' />}
          />
          <Pie data={transformedChartData} dataKey='value' label />

          <ChartLegend
            content={<ChartLegendContent nameKey='property' />}
            className='grid grid-rows-4 grid-cols-2'
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
