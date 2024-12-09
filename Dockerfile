FROM node:20-slim

WORKDIR /workspace

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "run", "dev" ]
