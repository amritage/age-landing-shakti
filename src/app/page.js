import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import New from './components/New';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <New />
        <Products />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
