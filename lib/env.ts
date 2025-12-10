import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

export const env = createEnv({
    server: {
        GITHUB_CLIENT_ID: z.string().min(2),
        GITHUB_CLIENT_SECRET: z.string().min(2),
        GOOGLE_CLIENT_ID: z.string().min(2),
        GOOGLE_CLIENT_SECRET: z.string().min(2)
    },
    experimental__runtimeEnv: process.env,
})