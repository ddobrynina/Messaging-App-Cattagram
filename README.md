# Messaging-App-Cattagram
Telegram knockoff centered around cats.

## Running

These commands must be run from the root dir (same level as api and client)

```bash
docker compose up -d
```

If rebuilding:
```bash
docker compose up --build -d
```

Stopping:
```bash
docker compose down
```

Stop and remove volumes:
```bash
docker compose down -v
```

Attach to container:

- Get container name/id:
```bash
docker ps
```

- Attach:
```bash
docker exec -it <container-name-or-id> sh
```

**NOTE**: `-i` means interactive, `-t` means pseudo-terminal

## Seed the database:

```bash 
npm run seed
```
