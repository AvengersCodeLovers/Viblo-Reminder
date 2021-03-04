FROM node:10.23.3-alpine3.10

RUN npm install -g nodemon
WORKDIR /usr/src/app

CMD tail -f /dev/null