FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM base AS development
COPY . .
EXPOSE 3002
CMD [ "npm", "run", "dev" ]


FROM base AS production
COPY . .
EXPOSE 3002
CMD ["npm", "start"]