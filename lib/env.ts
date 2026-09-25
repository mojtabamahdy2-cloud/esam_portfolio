import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional().default('https://mohamedalmojtaba.com'),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
