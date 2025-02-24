# FROM node:slim
# ENV NODE_ENV production
# WORKDIR /express-docker
# COPY . .
# RUN npm install
# RUN npm install pm2 -g
# CMD pm2 start process.yml && tail -f /dev/null
# EXPOSE 3000

FROM node:alpine
ENV NODE_ENV=development
WORKDIR /express-docker
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "ts-node", "./src/bin/www.ts"]
