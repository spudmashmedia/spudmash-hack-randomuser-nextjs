#---------------------------------------------------------------------------------------------
#  Copyright (c) Spudmash Media Pty Ltd
#  Licensed under the MIT License. See License.txt in the project root for license information.
#---------------------------------------------------------------------------------------------

FROM node:10.13-alpine as builder
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --silent && npm run export

FROM nginx:1-alpine
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

