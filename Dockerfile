FROM nikolaik/python-nodejs:latest
RUN groupadd uwu && useradd --gid uwu --shell /bin/bash --create-home uwu
RUN mkdir -p /home/uwu/uwu/node_modules && chown -R uwu:uwu /home/uwu/uwu
WORKDIR /home/uwu/uwu
COPY package*.json ./
USER uwu
RUN npm install
COPY --chown=uwu:uwu . .
CMD ["node","app.js"]