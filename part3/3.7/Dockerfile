FROM alpine

ENV PORT=8080

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apk add --update nodejs npm && \
    npm install -g npm@8.5.1 && \
    npm install --silent && mv node_modules ../ && \
    adduser -D backend && \
    chown -R backend:backend .

COPY . .

USER backend

EXPOSE 8080

CMD npm start
