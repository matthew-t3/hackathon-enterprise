'use client';
import { AgeChart } from '@/components/chart-age';
import { CountryChart } from '@/components/chart-country';
import { EducationChart } from '@/components/chart-education';
import { EmploymentChart } from '@/components/chart-employment';
import { GenderChart } from '@/components/chart-gender';
import { IndustryChart } from '@/components/chart-industry';
import { LanguageChart } from '@/components/chart-language';
import { MaritalChart } from '@/components/chart-marital';
import { ProvinceChart } from '@/components/chart-province';

export function ChartView() {
  return (
    <div className='grid gap-6 grid-cols-3'>
      <AgeChart />
      <GenderChart />
      <CountryChart />
      <ProvinceChart />
      <MaritalChart />
      <EmploymentChart />
      <LanguageChart />
      <IndustryChart />
      <EducationChart />
    </div>
  );
}
