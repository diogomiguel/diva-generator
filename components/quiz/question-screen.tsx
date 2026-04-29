"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface QuestionScreenProps {
  currentQuestion: number;
  totalQuestions: number;
  question: string;
  options: string[];
  onAnswer: (answerIndex: number) => void;
}

export function QuestionScreen({
  currentQuestion,
  totalQuestions,
  question,
  options,
  onAnswer,
}: QuestionScreenProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="max-h-dvh overflow-hidden flex flex-col px-4 py-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Rainbow decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>
      {/* Progress section */}
      <div className="max-w-2xl mx-auto w-full mb-8 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-pink-300 font-[family-name:var(--font-cinzel)]">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-sm bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="relative">
          <Progress
            value={progress}
            className="h-3 bg-slate-700"
          />
          {/* Rainbow progress indicator */}
          <div
            className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <Card className="max-w-2xl w-full bg-slate-800/80 border-purple-500/50 backdrop-blur-sm shadow-2xl shadow-purple-500/20">
          <CardContent className="p-4 md:p-10">
            {/* Question text */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-[family-name:var(--font-cinzel)] text-balance leading-relaxed bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              {question}
            </h2>

            {/* Answer options */}
            <div className="space-y-4">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => onAnswer(index)}
                  className="w-full h-auto py-4 px-4 md:px-6 text-left justify-start text-sm md:text-base bg-slate-700/50 border-purple-500/30 hover:border-pink-500 hover:bg-purple-700/50 transition-all duration-300 group rounded-xl text-white"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold mr-3 group-hover:from-blue-500 group-hover:to-pink-500 transition-all shrink-0 font-[family-name:var(--font-cinzel)]">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="leading-relaxed break-words whitespace-normal">{option}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decorative footer */}
      <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground/50 relative z-10">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i < currentQuestion
                ? "bg-gradient-to-r from-pink-500 to-purple-500"
                : i === currentQuestion - 1
                ? "bg-blue-500"
                : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
