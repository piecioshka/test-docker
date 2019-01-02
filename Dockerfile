FROM node:11

COPY src .
COPY package.json .

RUN ["npm", "install"]

CMD ["npm", "run", "start"]
