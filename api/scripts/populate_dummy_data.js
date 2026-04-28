/**
 * mongosh seed script — run from the api directory on the host:
 *   docker compose exec -T mongo mongosh < scripts/populate_dummy_data.js
 *
 * Expects this repo’s api folder mounted read-only at /seed in the mongo service.
 */
const fs = require("fs");
const path = require("path");

const dbName = "cattagram";
const d = db.getSiblingDB(dbName);

const messagesPath = path.join("/seed", "messages.json");
const { conversations, profiles, dashboard } = JSON.parse(
  fs.readFileSync(messagesPath, "utf8")
);

["dashboards", "conversations", "profiles"].forEach((name) => {
  d.getCollection(name).deleteMany({});
});

if (dashboard && dashboard.length) {
  d.dashboards.insertMany(dashboard);
}
if (conversations && conversations.length) {
  d.conversations.insertMany(conversations);
}
if (profiles && profiles.length) {
  d.profiles.insertMany(profiles);
}

print(`Seeded cattagram: dashboards=${d.dashboards.countDocuments()}, conversations=${d.conversations.countDocuments()}, profiles=${d.profiles.countDocuments()}`);
