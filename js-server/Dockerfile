FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN corepack enable && yarn install

COPY src ./src

EXPOSE 8001

CMD ["yarn", "start"]