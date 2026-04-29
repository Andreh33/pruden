import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

let _client: Client | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

function getClient(): Client {
  if (_client) return _client;

  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error(
      "TURSO_DATABASE_URL no está configurada. Define las variables de Turso en .env.local o en el panel de Vercel.",
    );
  }

  _client = createClient({ url, authToken });
  return _client;
}

export function getDb() {
  if (_db) return _db;
  _db = drizzle(getClient(), { schema });
  return _db;
}

export function isDbConfigured() {
  return Boolean(process.env.TURSO_DATABASE_URL);
}

export { schema };
