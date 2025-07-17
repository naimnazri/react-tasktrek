FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the production build using `serve`
RUN npm install -g serve

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
