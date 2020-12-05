FROM node:12-alpine as build-stage

ENV REACT_APP_BACKEND_SERVER=http://localhost:8081/api
WORKDIR /frontend-todo
COPY . .

RUN npm install && \
    npm run build 

FROM nginx:alpine

COPY --from=build-stage /frontend-todo/build/ /usr/share/nginx/html
