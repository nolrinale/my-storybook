#USES DEBIAN
#BG: SUDO DOCKER RUN -TD CONTAINERNAME

FROM node:18-alpine
EXPOSE 8080
WORKDIR /app
COPY . .

RUN npm install ; npm install -y -g http-server

RUN npm run build-storybook

CMD ["http-server", "--cors", "-p8080", "./storybook-static"]