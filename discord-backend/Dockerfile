### STAGE 1: Build ###
FROM node:latest

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV MONGO_URI="host.docker.internal"

### STAGE 2: Run ###
EXPOSE 5002
COPY . .
ENTRYPOINT ["yarn", "start"]