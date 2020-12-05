#!/bin/bash
sql=$(echo "INSERT INTO todos VALUES ('$(echo $(curl -I  https://en.wikipedia.org/wiki/Special:Random | grep location:) | sed 's/location:/Read/1')');") 
echo $POSTGRES_HOST
echo $POSTGRES_USER
echo $POSTGRES_PASSWORD
echo $sql | psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -W < $POSTGRES_PASSWORD