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
  employed: {
    label: 'Employed',
    color: 'hsl(var(--chart-4))',
  },
  self_employed: {
    label: 'Self Employed',
    color: 'hsl(var(--chart-3))',
  },
  unemployed: {
    label: 'Unemployed',
    color: 'hsl(var(--chart-9))',
  },
  student: {
    label: 'Student',
    color: 'hsl(var(--chart-8))',
  },
  retired: {
    label: 'Retired',
    color: 'hsl(var(--chart-7))',
  },
  not_filled_in: {
    label: 'Not Filled In',
    color: 'hsl(var(--chart-6))',
  },
} satisfies ChartConfig;

export function EmploymentChart() {
  const chartData = data['employment_status'];
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
          Employment Status
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
