export function retry(fn, n = 3) {
  // Now retries up to n times as you requested
  // We loop n times and call fn
  // If fn throws we try again
  // Previously this only tried once
  for (let i = 0; i < n; i++) {
    try { return fn(); } catch (e) { if (i === n - 1) throw e; }
  }
}
