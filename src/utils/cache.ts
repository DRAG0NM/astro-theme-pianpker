/**
 * Memoizes an async function, caching results by arguments
 *
 * @param fn - The async function to memoize
 * @returns Memoized function that caches results
 */
export function memoize<Args extends any[], T>(
  fn: (...args: Args) => Promise<T>,
): (...args: Args) => Promise<T> {
  const cache = new Map<string, Promise<T>>()

  return async (...args: Args): Promise<T> => {
    // Generate cache key from function arguments
    const key = JSON.stringify(args)

    // Return cached promise if it exists
    if (cache.has(key)) {
      return cache.get(key)!
    }

    // Execute the original function and cache the promise
    const promise = fn(...args)
    cache.set(key, promise)

    // Remove failed promises from cache to allow retry
    promise.catch(() => {
      cache.delete(key)
    })

    return promise
  }
}
