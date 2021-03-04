FROM node:10.23.3-alpine3.10

RUN npm install -g nodemon
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN yarn
ADD . /usr/src/app
RUN yarn build

CMD [ "nodemon" ]