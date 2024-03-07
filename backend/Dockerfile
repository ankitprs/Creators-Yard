FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM base AS development
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]


FROM base AS production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]