FROM node:12 AS build

WORKDIR /app
# yarn.lock ./

COPY package.json package-lock.json ./

RUN npm ci

# ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./

RUN npx ng build --prod


FROM nginx:1.18

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf 

COPY --from=build /app/dist/* ./
#ENTRYPOINT ["dotnet", "Calm.dll"]
