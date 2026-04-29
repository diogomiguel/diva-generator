# Contentful Integration Setup Guide

The Medieval Diva Quiz now supports **Contentful CMS** for managing quiz questions and results. This allows you to update content without code changes.

## Quick Start

### 1. Create a Contentful Account
- Sign up at [contentful.com](https://www.contentful.com)
- Create a new Space

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Then add your Contentful credentials:
```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

To get these:
1. Go to your Contentful space
2. Settings → API keys → Content Delivery API
3. Copy your Space ID and Access Token

### 3. Create Content Models

#### A. Create "quizQuestion" Content Model

1. In Contentful: Content Model → Add Content Type
2. Name: `quizQuestion`
3. Add these fields:

| Field Name | Field Type | Required |
|-----------|-----------|----------|
| `question` | Text | Yes |
| `options` | JSON (array) | Yes |
| `archetypes` | JSON (array of numbers) | Yes |

**Example JSON for fields:**
```json
// options field example
["Option 1", "Option 2", "Option 3", "Option 4"]

// archetypes field example
[0, 1, 2, 3]
```

#### B. Create "resultArchetype" Content Model

1. Add another Content Type
2. Name: `resultArchetype`
3. Add these fields:

| Field Name | Field Type | Required |
|-----------|-----------|----------|
| `title` | Text | Yes |
| `description` | Text (long) | Yes |
| `order` | Integer | Yes |

**Order values:** 0-6 (one for each archetype)

### 4. Import Default Content (Optional)

If you want to start with the existing quiz, create entries manually or use the data from `/lib/defaultQuizData.ts`.

**Archetype Order:**
- 0: The Radiant Diva
- 1: The Mermaiden Diva
- 2: The Enchanted Diva
- 3: The Celestial Diva
- 4: The Evil Diva
- 5: The Party Diva
- 6: The Royal Diva

### 5. Restart Your Dev Server

```bash
npm run dev
```

The app will now fetch quiz data from Contentful. If Contentful is not configured, it automatically falls back to the default data in `/lib/defaultQuizData.ts`.

## File Structure

```
lib/
├── contentful.ts           # Contentful client setup
├── defaultQuizData.ts      # Fallback data if Contentful unavailable
└── ...

app/
├── api/
│   └── quiz/
│       └── route.ts        # API endpoint for quiz data
├── page.tsx               # Main quiz component (now fetches from API)
└── ...

.env.local                 # Your Contentful credentials (not in git)
.env.local.example         # Template for environment variables
```

## API Endpoint

The quiz fetches data from: `GET /api/quiz`

Returns:
```json
{
  "questions": [...],
  "results": [...]
}
```

## Troubleshooting

### "Failed to fetch from Contentful"
- Check your Space ID and Access Token
- Ensure your Contentful space is published
- Check browser console for specific errors

### Content not updating
- Publish entries in Contentful (unpublished entries aren't visible to the API)
- Clear browser cache
- Restart dev server

### Using only default data
- Leave `.env.local` empty/unconfigured
- App will use `/lib/defaultQuizData.ts` automatically

## Next Steps

1. Customize the content in Contentful
2. Edit questions, options, and results directly in the CMS
3. No redeploy needed—changes are live immediately!

