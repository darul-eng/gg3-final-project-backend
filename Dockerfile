FROM node:18.16.1-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_PORT=4000

EXPOSE 4000

CMD ["node", "src/app.js"]