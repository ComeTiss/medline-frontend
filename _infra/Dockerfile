FROM node:12.11.1-alpine

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json

RUN npm install --silent

COPY . /frontend

CMD ["npm", "start"]