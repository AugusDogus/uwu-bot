FROM nikolaik/python-nodejs:latest
RUN groupadd uwu && useradd --gid uwu --shell /bin/bash --create-home uwu
RUN mkdir -p /home/node/uwu/node_modules && chown -R uwu:uwu /home/node/uwu
WORKDIR /home/node/uwu
COPY package*.json ./
USER uwu
RUN npm install
COPY --chown=uwu:uwu . .
CMD ["sh", "-c", "node","app.js"]