'use client';

import React from 'react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, className = '' }: MagneticProps) {
  return (
    <div className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
