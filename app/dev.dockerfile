FROM node:16-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY prisma ./prisma
RUN npx prisma generate

ENV NODE_ENV development
# Disable prisma and next.js telemetry
ENV CHECKPOINT_DISABLE 1
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "run", "dev"]