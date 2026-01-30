# syntax=docker/dockerfile:1
FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --no-cache

COPY . .
# next build без turbopack для стабильности в Docker
RUN bun run build

# ---
FROM oven/bun:1-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

CMD ["bun", "run", "start"]
