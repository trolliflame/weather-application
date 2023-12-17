FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clear --force && npm install

CMD npm start
