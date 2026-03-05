FROM node:24

# Install Redis
RUN apt-get update && apt-get install -y redis-server

WORKDIR /app

COPY . .

RUN npm install

# Expose app + redis ports
EXPOSE 8080
EXPOSE 6379

# Start Redis and Node together
CMD redis-server --daemonize yes && npm start

