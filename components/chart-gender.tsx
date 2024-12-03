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
  female: {
    label: 'Female',
    color: 'hsl(var(--chart-1))',
  },
  male: {
    label: 'Male',
    color: 'hsl(var(--chart-2))',
  },
  non_binary: {
    label: 'Non Binary',
    color: 'hsl(var(--chart-3))',
  },
  prefer_not_to_say: {
    label: 'Prefer Not To Say',
    color: 'hsl(var(--chart-4))',
  },
  not_filled_in: {
    label: 'Not Filled In',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function GenderChart() {
  const chartData = data['gender'];
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
          Gender
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
