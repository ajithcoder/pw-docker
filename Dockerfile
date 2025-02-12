# Use the official Playwright image with dependencies pre-installed
FROM mcr.microsoft.com/playwright:v1.50.1-noble
USER root
RUN mkdir /tests
COPY . /tests
# Set working directory
WORKDIR /tests

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install
RUN npx @playwright/test install

# Install Playwright browsers
RUN npx playwright install --with-deps

# Command to run Playwright tests
RUN npx playwright test