FROM node:26

WORKDIR /app

COPY . . 

RUN npm i'

RUN npm run test

COPY .env.sample .env

EXPOSE 8080

CMD ["npm","start"]
