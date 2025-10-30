# ---------- Stage 1: Build and Test ----------
FROM node:21 AS backend-builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Run tests
RUN npm test


# ---------- Stage 2: Production Image ----------
FROM node:21-slim AS backend

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=backend-builder /app /app

# Expose your app port (adjust if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
