# Eatizen DB-SCHEMA

### Please run following script for every update in CICD pipeline:

```bash
npm install
npm run typeorm migration:run -- -t=false
```

### Generate Migration Using Default Connection

```bash
env-cmd -f .env.development npm run typeorm migration:generate -- -p -n YourMigrationName
```

### Run Migration Using Default Connection

```bash
env-cmd -f .env.development npm run typeorm migration:run -- -t=false
```

env-cmd -f .env.production.local npm run typeorm migration:run -- -t=false

### Revert Last Migration Using Default Connection

```bash
env-cmd -f .env.development npm run typeorm migration:revert
```

### Synchronize entity to db

PLEASE ONLY USE IN DEVELOPMENT!

```bash
env-cmd -f .env.development npm run typeorm -- schema:sync
```

## Install this as package from other repository

### Development

```bash
npm install "git+ssh://git@mx-git25060.ringus-solution.com:eatizen/database/db-schema.git#develop" --save
```

### Production

```bash
npm install "git+https://mx-git25060.ringus-solution.com/eatizen/database/db-schema.git#develop" --save
```
