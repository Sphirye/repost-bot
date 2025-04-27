FROM node:22-alpine
WORKDIR /usr/src/app
COPY package.json tsconfig.json ./
RUN npm install
COPY src/ ./src
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]