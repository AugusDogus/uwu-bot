FROM node:10-alpine
RUN mkdir -p /home/node/uwu/node_modules && chown -R node:node /home/node/uwu
WORKDIR /home/node/uwu
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
CMD ["node","app.js"]