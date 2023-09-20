FROM node:lts-alpine
LABEL authors="SHANTANU"

ENTRYPOINT ["top", "-b"]

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

VOLUME ["/app/data"]

CMD ["node", "server.js"]
