# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN apk add --no-cache \
    build-base \
    vips-dev \
    libmagic \
    bash \
    libc6-compat



RUN npm install --include=optional sharp \
    npm install passport-google-oauth20 \
    npm install --save-dev @types/passport-google-oauth20 lucide-react



# Copy all source code
COPY . .

# Build the React app (outputs to /app/build)
# ARG allows setting build-time variables for REACT_APP_*
ARG REACT_APP_API_URL=
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Expose application port
EXPOSE 3000

# Start Express server
CMD ["npm", "run", "start:prod"]

