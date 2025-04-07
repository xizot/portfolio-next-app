import React from 'react';
import { GlowingEffect } from '../ui/glowing-effect';

type CardGradientProps = {
  children: React.ReactNode;
};

export default function CardGradient({ children }: CardGradientProps) {
  return (
    <div className="relative border bg-slate-900 rounded-lg p-6 max-md:p-4">
      <GlowingEffect
        blur={10}
        borderWidth={5}
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
      {children}
    </div>
  );
}
