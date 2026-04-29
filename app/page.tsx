"use client";

import { useState, useEffect } from "react";
import { IntroScreen } from "@/components/quiz/intro-screen";
import { QuestionScreen } from "@/components/quiz/question-screen";
import { ResultScreen } from "@/components/quiz/result-screen";
import { defaultQuestions, defaultResults } from "@/lib/defaultQuizData";

// Quiz data with archetype mapping
// 0=Radiant, 1=Mermaiden, 2=Enchanted, 3=Celestial, 4=Evil, 5=Party, 6=Royal

interface QuizQuestion {
  question: string;
  options: string[];
  archetypes: number[];
}

interface QuizResult {
  title: string;
  description: string;
}

type QuizScreen = "intro" | "questions" | "result";

export default function QuizPage() {
  const [screen, setScreen] = useState<QuizScreen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>(defaultQuestions);
  const [results, setResults] = useState<QuizResult[]>(defaultResults);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch quiz data from API (uses Contentful if configured, falls back to defaults)
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("/api/quiz");
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.questions);
          setResults(data.results);
        }
      } catch (error) {
        console.warn("Failed to fetch from Contentful, using default data:", error);
        // Use defaults if fetch fails - already set in state initialization
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  const handleStart = () => {
    setScreen("questions");
    setCurrentQuestion(1);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setScreen("result");
    }
  };

  const handleRetake = () => {
    setScreen("intro");
    setCurrentQuestion(1);
    setAnswers([]);
  };

  const calculateResult = () => {
    // Count votes for each archetype (0-6)
    const votes = [0, 0, 0, 0, 0, 0, 0];
    answers.forEach((answerIndex, questionIndex) => {
      const archetypeIndex = questions[questionIndex].archetypes[answerIndex];
      votes[archetypeIndex]++;
    });

    // Find the archetype with the most votes
    let resultIndex = 0;
    let maxVotes = votes[0];
    for (let i = 1; i < 7; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        resultIndex = i;
      }
    }

    return results[resultIndex];
  };

  if (isLoading) {
    return (
      <main className="max-h-dvh overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-purple-200">Loading your diva destiny...</p>
        </div>
      </main>
    );
  }

  const currentResult = calculateResult();

  return (
    <main className="min-h-screen bg-background">
      {screen === "intro" && <IntroScreen onStart={handleStart} />}

      {screen === "questions" && (
        <QuestionScreen
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          question={questions[currentQuestion - 1].question}
          options={questions[currentQuestion - 1].options}
          onAnswer={handleAnswer}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          title={currentResult.title}
          description={currentResult.description}
          onRetake={handleRetake}
        />
      )}
    </main>
  );
}
