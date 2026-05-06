# Build stage
FROM node:20 AS frontend

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Production stage

FROM node:20-slim

WORKDIR /app

RUN npm install -g serve

COPY --from=frontend /app/dist ./dist

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]
