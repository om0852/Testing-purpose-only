import { MongoClient, Db } from "mongodb";

declare global {
  // allow global caching in dev (Next hot‑reload)
  // eslint-disable-next-line no-var
  var _mongo: { client: MongoClient; db: Db } | undefined;
}

export async function getMongo() {
  if (!global._mongo) {
    const uri = process.env.MONGODB_URI!;
    const client = new MongoClient(uri);
    await client.connect();
    global._mongo = { client, db: client.db("multi-ui") };
  }
  return global._mongo;
}
