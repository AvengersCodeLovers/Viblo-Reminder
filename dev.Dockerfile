FROM node:12-alpine

RUN apk add --no-cache tzdata
ENV TZ=Asia/Ho_Chi_Minh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install -g nodemon
WORKDIR /usr/src/app

CMD tail -f /dev/null