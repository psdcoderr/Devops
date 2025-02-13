FROM node

WORKDIR /app

COPY . /app

COPY . .

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

CMD ["npm","start"]



