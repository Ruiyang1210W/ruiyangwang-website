'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Technical from '@/components/Technical';
import Creative from '@/components/Creative';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Technical />
      <Creative />
      <CallToAction />
      <Footer />
    </div>
  );
}


