# Use the official Node.js image as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Define environment variables
ENV ENV MONGODB_URI="mongodb+srv://rahman13:ZLA4kOhM3eczIGEH@mongodb.12spgep.mongodb.net/?retryWrites=true&w=majority&appName=mongoDB"

# Define the command to run the Express app
CMD ["npm", "start"]