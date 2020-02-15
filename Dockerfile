FROM node:10-slim

ADD . app

WORKDIR app

RUN npm install && npm cache clear --force

CMD ["npm", "start"]
