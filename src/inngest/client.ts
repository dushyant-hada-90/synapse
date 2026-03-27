import {Inngest} from "inngest"
import {sentryMiddleware} from "@inngest/middleware-sentry"
export const inngest = new Inngest({
    id:"synapse",
    middleware:[sentryMiddleware()],
})