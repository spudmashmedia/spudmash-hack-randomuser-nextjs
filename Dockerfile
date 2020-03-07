#---------------------------------------------------------------------------------------------
#  Copyright (c) Spudmash Media Pty Ltd
#  Licensed under the MIT License. See License.txt in the project root for license information.
#---------------------------------------------------------------------------------------------

#
# CACHE npm install (package.json rarely changes)
#
FROM node:10.13-alpine as packages
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

#
# Seperate build stage for static output
#
FROM node:10.13-alpine as builder
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY common ./common
COPY components ./components 
COPY pages ./pages 
COPY public ./public
COPY package.json ./
COPY --from=packages /usr/src/app/node_modules ./node_modules
RUN npm run build \
    && npm run export

#
# Copy out folder from builder and host with nginx
#
FROM nginx:1-alpine
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
