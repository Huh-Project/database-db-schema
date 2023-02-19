FROM node:lts-alpine3.15 
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN [ "sh","-c","npm run typeorm migration:run -- -t=false && sleep infinity"]
