FROM node

RUN npm install --global nodemon

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "app.js"]