# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build the application
COPY . .
RUN npx ng build --configuration production

# Stage 2: Serve
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /src/dist/transfer-managment-front/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]