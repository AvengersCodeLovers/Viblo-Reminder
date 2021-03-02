FROM node:carbon

RUN npm install -g nodemon
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN yarn
ADD . /usr/src/app
RUN yarn build

CMD [ "nodemon" ]