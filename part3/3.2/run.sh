#!/bin/bash
echo "Enter git repository:"

read url

repository=$(basename $url);

basename=${repository%.*};

git clone $url $basename;

cd $basename;

echo "Login to Docker";

echo "Enter username:";

read DOCKER_USERNAME;

echo "Enter password:";

read -s DOCKER_PASSWORD;

username=$DOCKER_USERNAME;

echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin;

docker build -t $username/$basename .;

docker push $username/$basename;

cd .. && rm -rf $basename;
