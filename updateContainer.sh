#!/bin/bash
IMAGE_NAME="yukihiradeve/express-server"
CONTAINER_NAME="express-server"

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker pull $IMAGE_NAME

docker run --name $CONTAINER_NAME -d -p 80:80 $IMAGE_NAME
