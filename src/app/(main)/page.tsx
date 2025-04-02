import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { WhoIAm } from '@/components/who-i-am';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <Experience />
    </>
  );
}
