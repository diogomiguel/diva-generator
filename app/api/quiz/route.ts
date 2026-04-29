import { getQuizData } from '@/lib/contentful';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getQuizData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quiz data' },
      { status: 500 }
    );
  }
}
