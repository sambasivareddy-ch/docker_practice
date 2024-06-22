# FROM baseImage[:version]
FROM node

# Working Directory of our docker container
WORKDIR /app

# COPY Source Dest
# COPY ./ WorkDir(/app)
COPY . /app

# Install all dependices in package.json
# RUN command
RUN npm install 

# EXPOSE the port to outside the container i.e local system
EXPOSE 3000

# Command: Will not executed when creating image instead when running the Container based on the image
CMD [ "node", "index.js" ]