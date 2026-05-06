# This image for backend server is using node 
# Stage (1)

FROM node:21 AS backend-image


WORKDIR /app


COPY . .


RUN  npm i

# Stage (2)

FROM node:21-slim 

WORKDIR /app

# Copy the above stage as compressed.

COPY --from=backend-image /app . 

COPY .env.sample .env

EXPOSE 5173

CMD ["npm", "start"]

