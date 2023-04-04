FROM node:17-alpine #14.17.3

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
Run install -g serve

COPY . ./

EXPOSE 80

CMD ["serve", "-s" "build"]
