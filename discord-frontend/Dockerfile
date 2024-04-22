### STAGE 1: Build ###
FROM node:latest

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

### STAGE 2: Run ###
EXPOSE 3002
COPY . .
ENTRYPOINT ["yarn", "start"]