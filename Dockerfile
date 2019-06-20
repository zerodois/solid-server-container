FROM node:12.4.0-stretch
RUN npm install -g solid-server
RUN mkdir /usr/app
WORKDIR /usr/app

COPY input.in input.in
RUN openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem < input.in
COPY docker_entrypoint.sh docker_entrypoint.sh
RUN chmod +x docker_entrypoint.sh
EXPOSE 8443
COPY config.js config.js
VOLUME [ "./db" ]

ENTRYPOINT [ "./docker_entrypoint.sh" ]
