/** Log server request errors during development. */
export function onRequestError(
  err: unknown,
  request: { path: string; method: string },
  context: { routerKind: string }
) {
  if (process.env.NODE_ENV !== "production") {
    console.error("[Request Error]", {
      path: request.path,
      method: request.method,
      routerKind: context.routerKind,
      error: err,
    });
  }
}
