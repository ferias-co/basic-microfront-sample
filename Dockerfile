FROM node:10-alpine
WORKDIR /usr/src/microfront-sample
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 80
ENV PORT=80
CMD [ "npm", "start" ]
