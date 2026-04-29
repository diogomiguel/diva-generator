"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Crown } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Rainbow decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Luke's SVG portrait */}
        <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 filter brightness-110">
          <img
            src="/luke.svg"
            alt="Luke's portrait"
            className="w-full h-full object-contain bg-transparent"
          />
          <Sparkles className="w-6 h-6 text-pink-400 absolute -top-2 -right-2 animate-bounce" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-cinzel)] text-balance">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Who is Your</span>
          <br />
          <span className="bg-gradient-to-r from-green-300 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Medieval Diva?
          </span>
        </h1>

        {/* Subtitle with Luke reference */}
        <p className="text-lg md:text-xl text-purple-200 mb-4 max-w-lg leading-relaxed">
          Embark on a fabulous journey to discover your legendary medieval persona and unlock your inner diva energy!
        </p>
        <p className="text-sm md:text-base text-pink-300 mb-10 max-w-lg leading-relaxed italic">
          Inspired by the legendary Luke—the ultimate medieval diva they are.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-purple-500" />
          <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-500 to-green-500" />
        </div>

        {/* Start button */}
        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white text-lg px-10 py-6 h-auto rounded-full shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 font-[family-name:var(--font-cinzel)]"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Begin Your Quest
        </Button>

        {/* Footer text */}
        <p className="mt-8 text-sm text-pink-300/80 italic">
          ✨ Created for Luke's fabulous birthday • 10 questions • Infinite diva energy ✨
        </p>
      </div>
    </div>
  );
}
