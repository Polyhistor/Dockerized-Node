# Specify a base image
FROM node:alpine 

# creating a work directory
WORKDIR /usr/app

# we create two separate steps for copying, because we want to avoid installing pacakges each time
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy everything from local directory into container's local directory
COPY ./ ./

# Settin default command
CMD ["npm", "start"]