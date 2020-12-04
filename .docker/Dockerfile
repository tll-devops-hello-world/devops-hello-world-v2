FROM node:12.19-buster-slim

RUN apt-get update \
  && apt-get upgrade -y

RUN yarn global add vue http-server

WORKDIR /home/app
