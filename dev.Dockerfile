FROM node:10.23.3-alpine3.10

RUN apk add --no-cache tzdata
ENV TZ=Asia/Ho_Chi_Minh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install -g nodemon
WORKDIR /usr/src/app

CMD tail -f /dev/null