# Stage 1
FROM node:latest as node
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
# Command to run docker is docker-compose up --build
FROM nginx:alpine
COPY --from=node usr/src/app/dist/Calm /usr/share/nginx/html
