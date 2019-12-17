FROM nikolaik/python-nodejs:latest
RUN mkdir -p /home/node/uwu/node_modules && chown -R node:node /home/node/uwu
WORKDIR /home/node/uwu
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
CMD ["sh", "-c", "node","app.js"]