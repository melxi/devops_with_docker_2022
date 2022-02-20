FROM node:lts-alpine
ENV REACT_APP_BACKEND_URL='http://localhost:8080'
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install -g npm@8.5.1
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
RUN npm install -g serve
CMD serve -s -l 3000 build