// Fix: Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  // Fix: Ensure React namespace is available for ReactNode type definition
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  text: string;
  author?: string;
}