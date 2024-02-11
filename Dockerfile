FROM node:20.11.0-alpine
RUN mkdir -p ./app
WORKDIR ./app
COPY ./package*.json .
RUN npm install
COPY ./src ./src
CMD [ "npm", "start" ]