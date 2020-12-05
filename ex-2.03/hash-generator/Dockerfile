FROM node:12-alpine
RUN mkdir /ping
WORKDIR /hash-generator
COPY . .
RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /hash-generator && \
	  chown -hR app /ping

USER app
CMD ["npm", "start"]
