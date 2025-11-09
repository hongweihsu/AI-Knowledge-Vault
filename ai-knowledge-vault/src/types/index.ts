export interface User {
  id: string;
  email: string;
  name: string;
  planType: 'free' | 'pro' | 'premium';
  remainingQuota: number;
  stripeCustomerId?: string;
}

export interface AIQuery {
  id: string;
  userId: string;
  query: string;
  response: string;
  timestamp: Date;
  model: 'gpt-4o' | 'gpt-4o-mini';
}

export interface AnalysisResult {
  summary: string;
  keyPoints: string[];
  confidence: number;
}