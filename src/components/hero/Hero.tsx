'use client';
import { Contact, Facebook, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { CodeBlock } from '../ui/code-block';
import ColourfulText from '../ui/colourful-text';
import { Button } from '../ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Section } from '../section';
import { GlowingEffect } from '../ui/glowing-effect';

export default function Hero() {
  const isMobile = useIsMobile();
  const codeDesktop = `const coder = {
    name: 'Nguyen Van Nhat',
    age: 26,
    skills: {
      frontend: ['React', 'NextJS', 'TypeScript', 'HTML5/CSS3'],
      styling: ['Tailwind CSS', 'Ant Design', 'Material UI',
        'Bootstrap', 'Shadcn UI'],
      backend: ['NodeJS', 'NestJS', 'Express',
        'C#', 'Python', 'C++/C'],
      database: ['PostgreSQL', 'MongoDB', 'MySQL', "MSSQL"],
      tools: ['Git', 'Docker'],
      testing: ['Jest', "Playwright", "Selenium"],
    },
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return (
        this.hardWorker &&
        this.quickLearner &&
        this.problemSolver &&
        this.skills.length > 0
      )
    }
  };`;

  const codeMobile = `const coder = {
    name: 'Nguyen Van Nhat',
    age: 26,
    skills: {
      frontend: [
        'React',
        'NextJS',
        'TypeScript',
        'HTML5/CSS3',
      ],
      styling: [
        'Tailwind CSS',
        'Ant Design',
        'Material UI',
        'Bootstrap',
        'Shadcn UI'],
      backend: [
        'NodeJS',
        'NestJS',
        'Express',
        'C#',
        'Python',
        'C++/C'],
      database: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'MSSQL'],
      tools: [
        'Git',
        'Docker'],
      testing: [
        'Jest',
        'Playwright',
        'Selenium',
      ],
    },
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardWorker 
      && this.quickLearner 
      && this.problemSolver 
      && this.skills.length > 0;
    },
  };`;

  const code = isMobile ? codeMobile : codeDesktop;

  return (
    <Section>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center max-md:gap-6">
        <div className="space-y-12 max-md:space-y-6 max-md:flex max-md:flex-col max-md:items-center">
          <h1 className="break-words leading-tight text-5xl font-extrabold max-md:text-center max-md:text-3xl">
            Hello, <br />
            This is <span className="text-[#16f2b3]">Nguyen Van Nhat</span>, I&apos;m a{' '}
            <ColourfulText text="Full Stack engineer" />
          </h1>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 bg-white dark:bg-accent rounded-full flex items-center justify-center"
              href="https://facebook.com/xizot"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              className="w-10 h-10 bg-white dark:bg-accent rounded-full flex items-center justify-center"
              href="https://github.com/xizot"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              className="w-10 h-10 bg-white dark:bg-accent rounded-full flex items-center justify-center"
              href="https://linkedin.com/nhat-dev/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
          <Button className="rounded-full h-14 min-w-48 bg-white" size="lg" variant="outline">
            Contact me <Contact />
          </Button>
        </div>
        <div className="relative rounded-xl border border-accent">
          <GlowingEffect
            blur={20}
            borderWidth={15}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <CodeBlock language="jsx" filename="Coder.jsx" code={code} />
        </div>
      </div>
    </Section>
  );
}
