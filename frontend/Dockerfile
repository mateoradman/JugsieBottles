FROM node:16

WORKDIR /usr/src/app/frontend

COPY package.json ./
COPY yarn.lock ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn install

EXPOSE 3000
