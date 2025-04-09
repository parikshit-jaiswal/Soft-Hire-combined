FROM node:slim as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.27.4-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html