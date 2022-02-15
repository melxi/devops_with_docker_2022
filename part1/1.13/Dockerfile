FROM golang:1.16
ADD . .
WORKDIR $GOPATH/example-backend
RUN go build -o server .
EXPOSE 8080
CMD ["/go/example-backend/server"]

