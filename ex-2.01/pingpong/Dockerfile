FROM node:12-alpine
RUN mkdir /ping 
WORKDIR /app
COPY . .
RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /ping && \
	  chown -hR app /app && \
	  chown -hR app /ping

USER app
CMD ["npm", "start"]
