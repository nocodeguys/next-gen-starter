// Feature flags for different services
export const useClerk = process.env.FEATURE_CLERK === 'true';
export const useStripe = process.env.FEATURE_STRIPE === 'true';
export const useOpenAI = process.env.FEATURE_OPENAI === 'true';

// Helper to check if we're in development mode
export const isDevelopment = process.env.NODE_ENV === 'development';

// Type-safe feature configuration object
export const features = {
  clerk: useClerk,
  stripe: useStripe,
  openai: useOpenAI,
} as const;

// Type helper for feature names
export type FeatureName = keyof typeof features;
