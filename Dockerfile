FROM node:lts-alpine3.15 
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["sh","-c","npm run typeorm migration:run -- -t=false && sleep inifinity"]
