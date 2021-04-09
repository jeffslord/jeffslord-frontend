FROM node:12-alpine

RUN mkdir -p /srv/app/home-client
# Create app directory
WORKDIR /srv/app/home-client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package.json .
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# EXPOSE 8080
CMD [ "npm", "start" ]