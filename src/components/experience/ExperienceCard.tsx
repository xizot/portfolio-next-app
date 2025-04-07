import React from 'react';
import CardGradient from '../card/CardGradient';
import { SquareUserRound } from 'lucide-react';
import dayjs from 'dayjs';
import { DateFormatter } from '@/lib/date.formatter';

type ExperienceCardProps = {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
};

export default function ExperienceCard({ company, position, startDate, endDate }: ExperienceCardProps) {
  const isCurrentYear =
    endDate.getFullYear() === new Date().getFullYear() && endDate.getMonth() === new Date().getMonth();
  const totalYears = dayjs(endDate).diff(dayjs(startDate), 'year');
  const totalMonths = dayjs(endDate).diff(dayjs(startDate), 'month') % 12;

  return (
    <CardGradient>
      <p className="text-center text-primary mb-2">
        {totalYears} yrs {totalMonths > 0 && `${totalMonths} mo`} ({DateFormatter.format(startDate)} -{' '}
        {isCurrentYear ? 'Present' : DateFormatter.format(endDate)})
      </p>
      <div className="flex items-center gap-6 max-md:gap-4">
        <SquareUserRound className="text-[#8be9fd] shrink-0" size={36} strokeWidth={1.25} />
        <div>
          <h3 className="text-2xl font-semibold uppercase mb-1 text-white max-md:text-xl">{position}</h3>
          <p className="text-gray-300 text-lg">{company}</p>
        </div>
      </div>
    </CardGradient>
  );
}
