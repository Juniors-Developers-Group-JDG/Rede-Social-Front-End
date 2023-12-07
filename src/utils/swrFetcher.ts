export type FetcherArgs = {
  path: RequestInfo | URL;
  init?: RequestInit | undefined;
} | null;

export function fetcher<Response = unknown | undefined>(
  args: FetcherArgs,
): typeof args extends null ? undefined : Promise<Response> {
  if (args === null) return new Promise(pro => pro);

  const { path, init } = args;

  const url = process.env.NEXT_PUBLIC_API_URL || '';

  return fetch(url + path, init).then(res => res.json());
}
