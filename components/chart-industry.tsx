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
  '45102030': {
    label: '45102030',
    color: 'hsl(var(--chart-1))',
  },
  '45302010': {
    label: '45302010',
    color: 'hsl(var(--chart-2))',
  },
  '45201020': {
    label: '45201020',
    color: 'hsl(var(--chart-3))',
  },
  '45301010': {
    label: '45301010',
    color: 'hsl(var(--chart-4))',
  },
  not_filled_in: {
    label: 'Not Filled In',
    color: 'hsl(var(--chart-6))',
  },
} satisfies ChartConfig;

export function IndustryChart() {
  const chartData = data['employment_industry'];
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
          Employment Industry
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
