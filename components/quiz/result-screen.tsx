"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, RotateCcw, Share2, Crown } from "lucide-react";

interface ResultScreenProps {
  title: string;
  description: string;
  onRetake: () => void;
}

export function ResultScreen({ title, description, onRetake }: ResultScreenProps) {
  const [shareMessage, setShareMessage] = useState<string>("");

  const getResultImage = () => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("radiant")) return "/results/radiant.svg";
    if (titleLower.includes("mermaiden")) return "/results/mermaiden.svg";
    if (titleLower.includes("enchanted")) return "/results/enchanted.svg";
    if (titleLower.includes("celestial")) return "/results/celestial.svg";
    if (titleLower.includes("evil")) return "/results/evil.svg";
    if (titleLower.includes("party")) return "/results/party.svg";
    if (titleLower.includes("royal")) return "/results/royal.svg";
    return "/results/radiant.svg";
  };

  const handleShare = async () => {
    const text = `I'm ${title} in the Medieval Diva Quiz! 👑 Find out your medieval diva archetype: ${typeof window !== 'undefined' ? window.location.href : ''}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Medieval Diva Quiz",
          text: text,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShareMessage("Result copied to clipboard!");
      setTimeout(() => setShareMessage(""), 2000);
    }
  };
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 py-8 relative overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Rainbow decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Confetti-like sparkles */}
      <div className="absolute top-10 left-1/4">
        <Sparkles className="w-6 h-6 text-pink-400/60 animate-bounce" style={{ animationDelay: '0.2s' }} />
      </div>
      <div className="absolute top-20 right-1/3">
        <Sparkles className="w-4 h-4 text-blue-400/60 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-40 left-1/5">
        <Sparkles className="w-5 h-5 text-purple-400/60 animate-bounce" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Your result label */}
        <div className="flex items-center gap-2 mb-6">
          <Crown className="w-5 h-5 text-pink-400" />
          <span className="text-sm uppercase tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-bold font-[family-name:var(--font-cinzel)]">
            Your Medieval Diva Is
          </span>
          <Crown className="w-5 h-5 text-purple-400" />
        </div>

        {/* Result card */}
        <Card className="w-full bg-slate-800/80 border-purple-500/50 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
          <CardContent className="p-6 md:p-10 flex flex-col items-center">
            {/* Result illustration */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 mb-8 shadow-lg shadow-purple-500/40">
              <div className="w-full h-full rounded-full bg-[#2D1B4E] flex items-center justify-center overflow-hidden">
                <img
                  src={getResultImage()}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Result title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-cinzel)] text-balance">
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Result description */}
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-lg mb-8">
              {description}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-purple-500" />
              <Sparkles className="w-4 h-4 text-blue-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-500 to-green-500" />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                onClick={onRetake}
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-6 h-auto rounded-full shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 font-[family-name:var(--font-cinzel)]"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Take Quiz Again
              </Button>
              <Button
                onClick={handleShare}
                size="lg"
                className="bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 hover:from-green-600 hover:via-cyan-600 hover:to-purple-600 text-white px-8 py-6 h-auto rounded-full shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105 font-[family-name:var(--font-cinzel)]"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {shareMessage ? "Copied!" : "Share Result"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer text */}
        <p className="mt-8 text-sm text-pink-300 italic">
          ✨ Every diva is valid. Every diva is fabulous. ✨
        </p>
      </div>
    </div>
  );
}
