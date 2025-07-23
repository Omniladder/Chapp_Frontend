FROM node:24 AS frontend-build

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine AS frontend-server

COPY --from=frontend-build /app/dist/Chapp/browser/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
