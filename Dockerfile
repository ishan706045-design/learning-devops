FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Dockerfile doesn't choose the port.
# It only EXPOSES the default port (optional comment below)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
