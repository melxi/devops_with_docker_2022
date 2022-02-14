FROM ubuntu:20.04

WORKDIR /1.7
RUN apt-get update && apt-get install -y curl

COPY curler.sh .
RUN chmod +x curler.sh
ENTRYPOINT ["/bin/bash"]
CMD ["curler.sh"]
