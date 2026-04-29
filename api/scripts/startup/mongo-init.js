/**
 * Creates the Cattagram database, collections, and indexes for local MongoDB.
 * Collections match Mongoose defaults: Dashboard -> dashboards, Profile -> profiles.
 *
 * Run:
 *   ./scripts/mongo-init.sh
 * Or with mongosh on the host:
 *   mongosh "mongodb://127.0.0.1:27017" --file scripts/mongo-init.js
 */

const dbName = "cattagram";
const d = db.getSiblingDB(dbName);

function ensureCollection(name) {
  if (!d.getCollectionNames().includes(name)) {
    d.createCollection(name);
  }
}

ensureCollection("dashboards");
ensureCollection("profiles");
ensureCollection("conversations");

d.dashboards.createIndex({ id: 1 }, { unique: true });
d.profiles.createIndex({ id: 1 }, { unique: true });
d.conversations.createIndex({ id: 1 }, { unique: true });

print(`MongoDB database "${dbName}" is ready (collections + indexes).`);
