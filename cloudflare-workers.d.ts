/* eslint-disable @typescript-eslint/no-explicit-any */

type Fetcher = any;
type D1Database = any;

declare module "cloudflare:workers" {
  export const env: {
    DB?: any;
  };
}
