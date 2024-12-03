import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/chart';
import { data } from '@/lib/data';
import { CircleHelp } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';

const chartConfig = {
  single: {
    label: 'Single',
    color: 'hsl(var(--chart-3))',
  },
  married: {
    label: 'Married',
    color: 'hsl(var(--chart-3))',
  },
  divorced: {
    label: 'Divorced',
    color: 'hsl(var(--chart-3))',
  },
  separated: {
    label: 'Deparated',
    color: 'hsl(var(--chart-3))',
  },
  widowed: {
    label: 'Windowed',
    color: 'hsl(var(--chart-3))',
  },
  co_habiting: {
    label: 'Co Habiting',
    color: 'hsl(var(--chart-3))',
  },
  not_filled_in: {
    label: 'Not Filled In',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function MaritalChart() {
  const chartData = data['marital_status'];
  const transformedChartData = Object.entries(chartData).map(([key, value]) => {
    return {
      property: key,
      value,
    };
  });

  return (
    <div className='flex flex-col p-5 gap-6 rounded-xl border border-gray-200 shadow-lg w-full overflow-hidden'>
      <div className='flex'>
        <div className='flex gap-2 items-center text-gray-900 font-semibold'>
          Marital Status
          <span className='text-gray-400'>
            <CircleHelp size={16} />
          </span>
        </div>
      </div>

      <ChartContainer config={chartConfig} className='min-h-[400px]'>
        <BarChart
          accessibilityLayer
          data={transformedChartData}
          layout='vertical'
          margin={{
            right: 16,
          }}>
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey='property'
            type='category'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey='value' type='number' hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator='line' />}
          />
          <Bar
            dataKey='value'
            layout='vertical'
            radius={4}
            fill='var(--color-single)'>
            <LabelList
              dataKey='property'
              position='insideLeft'
              offset={8}
              className='fill-white'
              fontSize={12}
            />
            <LabelList
              dataKey='value'
              position='right'
              offset={8}
              className='fill-foreground'
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
