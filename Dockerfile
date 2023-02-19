FROM node:lts-alpine3.15 
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["/start.sh"]