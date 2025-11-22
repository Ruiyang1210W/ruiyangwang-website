'use client';

import Navbar from '@/components/navbar';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
    </>
  );
}
