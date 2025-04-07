import { cn } from '@/lib/utils';
import { Section } from '../section';
import SectionTag from '../section/SectionTag';
import ExperienceCard from './ExperienceCard';
import ExperienceSvg from './ExperienceSvg';

const experiences = [
  {
    company: 'StepMedia Software - Onsite',
    position: 'Full Stack Developer ',
    startYear: new Date('2023-06-01'),
    endDate: new Date(),
  },
  {
    company: 'Saigon New Port  - Onsite',
    position: 'Full Stack Developer',
    startYear: new Date('2021-06-01'),
    endDate: new Date('2023-06-01'),
  },
  {
    company: 'Allgrow Labo Co. - Onsite',
    position: 'Frontend Developer',
    startYear: new Date('2021-06-01'),
    endDate: new Date('2023-06-01'),
  },
];
export default function Experience() {
  return (
    <Section className="relative">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex justify-center mb-6">
        <SectionTag text="Experiences" />
      </div>
      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-6 relative z-10 items-center">
        <div>
          <ExperienceSvg />
        </div>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              company={experience.company}
              position={experience.position}
              startDate={experience.startYear}
              endDate={experience.endDate}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
