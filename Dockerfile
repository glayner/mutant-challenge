FROM node:12-alpine AS builder

RUN mkdir -p /home/node/build/node_modules && chown -R node:node /home/node/build

WORKDIR /home/node/build

COPY --chown=node:node package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

RUN yarn build


FROM node:12-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

RUN apk --no-cache add \
    bash\
    && yarn global add pm2 \
    && rm -rf /var/cache/apk/*

USER node

COPY --chown=node:node --from=builder /home/node/build/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/build/process.yml .
COPY --chown=node:node --from=builder /home/node/build/ormconfig.js .
COPY --chown=node:node --from=builder /home/node/build/dist .

EXPOSE 3000

CMD ["pm2-runtime", "process.yml"]
