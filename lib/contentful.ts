import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export interface QuizQuestion {
  question: string;
  options: string[];
  archetypes: number[];
}

export interface ResultArchetype {
  title: string;
  description: string;
}

export async function getQuizData() {
  try {
    const questionsRes = await contentfulClient.getEntries({
      content_type: 'quizQuestion',
      order: ['sys.createdAt'],
    });

    const resultsRes = await contentfulClient.getEntries({
      content_type: 'resultArchetype',
      order: ['fields.order'],
    });

    const questions: QuizQuestion[] = questionsRes.items.map((item: any) => ({
      question: item.fields.question,
      options: item.fields.options,
      archetypes: item.fields.archetypes,
    }));

    const results: ResultArchetype[] = resultsRes.items.map((item: any) => ({
      title: item.fields.title,
      description: item.fields.description,
    }));

    return { questions, results };
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    throw error;
  }
}
