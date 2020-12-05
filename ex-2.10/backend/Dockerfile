FROM node:12-alpine
WORKDIR /app
COPY . .

ENV POSTGRES_DB=""
ENV POSTGRES_USER=""
ENV POSTGRES_PASSWORD=""
ENV POSTGRES_HOST=""

RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /app 
	  
USER app
CMD ["npm", "start"]
