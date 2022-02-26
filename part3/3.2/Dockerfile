FROM ubuntu:latest

RUN apt-get update -y && apt install -y

RUN apt-get install curl -y

RUN apt-get install git -y

RUN curl -fsSL https://get.docker.com -o get-docker.sh

RUN sh get-docker.sh

COPY ./run.sh .

RUN chmod +x ./run.sh

ENTRYPOINT ["/run.sh"]
