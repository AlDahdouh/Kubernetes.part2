FROM node:12-alpine
WORKDIR /app
COPY . .
RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /app 

USER app
CMD ["npm", "start"]
