FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json .

RUN npm i -g pnpm
RUN pnpm i

COPY tsconfig.json .
COPY src ./src

CMD npm start