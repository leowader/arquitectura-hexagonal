import { z } from "zod";
const validDialects = ["postgres"] as const;
const envVariables = z.object({
  PORT: z.string(),
  NAME_DB: z.string(),
  USERNAME: z.string(),
  PASSWORD: z.string(),
  HOST: z.string(),
  DIALECT: z.enum(validDialects),
});
envVariables.parse(process.env);
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
