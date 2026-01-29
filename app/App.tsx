import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CTASection } from "./components/CTASection";
import Scoreboard from "./components/Scoreboard";
import { SmartDispenser } from "../SmartDispenser";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24">
        <Hero />
        <Features />

        <section id="summa" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <Scoreboard />
          </div>
        </section>

        <section id="product" className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <SmartDispenser />
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
}