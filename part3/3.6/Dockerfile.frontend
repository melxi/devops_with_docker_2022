FROM node:lts-alpine AS build-stage

ENV REACT_APP_BACKEND_URL=http://localhost:8080/

COPY . .

WORKDIR /example-frontend

RUN npm install && \
    npm run build

FROM alpine

COPY --from=build-stage /example-frontend/build /example-frontend/build

WORKDIR /example-frontend

RUN apk add --update nodejs npm && \
    npm install -g serve && \
    adduser -D frontend && \
    chown -R frontend:frontend /example-frontend

USER frontend

EXPOSE 5000

CMD serve -s -l 5000 build
