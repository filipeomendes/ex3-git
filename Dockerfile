FROM node:lts-alpine3.19

WORKDIR /app-money

COPY app.js /app-money/

COPY package*json /app-money/

COPY node_modules /app-money/

EXPOSE 8080

CMD ["npm", "start"]