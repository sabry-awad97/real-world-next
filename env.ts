import { z } from 'zod';

const envVariables = z.object({
  API_ENDPOINT: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
