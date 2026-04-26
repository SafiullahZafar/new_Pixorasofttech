/**
 * Next.js instrumentation file — runs once on server startup.
 * Used here to register Web Vitals reporting to the console
 * (swap out console.log for your analytics endpoint in production).
 *
 * Docs: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */
export async function register() {
  // No-op in this env — instrumentation hook reserved for future analytics
}

/**
 * Client-side Web Vitals reporting.
 * Called automatically by Next.js with each Core Web Vital metric.
 * Replace the console.log with your analytics provider (GA4, PostHog, etc.)
 */
export function onRequestError(
  err: unknown,
  request: { path: string; method: string },
  context: { routerKind: string }
) {
  // Centralised error logging — swap with Sentry/Datadog in production
  if (process.env.NODE_ENV !== "production") {
    console.error("[Request Error]", {
      path: request.path,
      method: request.method,
      routerKind: context.routerKind,
      error: err,
    });
  }
}
