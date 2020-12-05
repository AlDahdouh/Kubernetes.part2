FROM ubuntu:latest
ENV POSTGRES_DB=""
ENV POSTGRES_USER=""
ENV POSTGRES_PASSWORD=""
ENV POSTGRES_HOST=""

WORKDIR /job
COPY . .

RUN    apt-get update && apt-get install curl postgresql-client -y && \
       rm -rf /var/lib/apt/list/* && \
	   useradd -m app && \
	   chown -hR app /job

CMD ["bash","insert.sh"]