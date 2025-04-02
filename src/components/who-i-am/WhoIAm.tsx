import Mysterious from '@/assets/images/mysterious.jpg';
import Image from 'next/image';
import { Section } from '../section';
import SectionTag from '../section/SectionTag';

export default function WhoIAm() {
  return (
    <Section title="Who I Am?" className="text-lg">
      <div className="flex max-lg:gap-6 lg:gap-28 max-md:flex-col">
        <p className="col-span-2">
          I’m a disciplined software developer with over 4 years of experience, specializing in web development. My
          expertise lies in crafting dynamic, high-performance applications using ReactJS, NextJS, and NodeJS.
          Passionate about leveraging cutting-edge technologies, I’m always eager to explore and implement innovative
          solutions to solve real-world challenges. My focus is on delivering clean, scalable code while continuously
          adapting to the fast-paced tech landscape.
        </p>
        <Image
          src={Mysterious}
          alt="Mysterious"
          className="shrink-0 rounded-lg max-lg:w-60 max-lg:h-60 w-72 h-72 object-cover object-center shadow"
        />
        <div className="max-md:hidden">
          <SectionTag text="About Me" className="mt-11" rotate showLineBefore={false} />
        </div>
      </div>
    </Section>
  );
}
