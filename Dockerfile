FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /app
COPY package.json .
RUN apk add --no-cache nodejs npm
RUN npm install -g yarn
RUN yarn install
COPY . .
RUN yarn run build
RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
