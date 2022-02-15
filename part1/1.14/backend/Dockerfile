FROM golang:1.16
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000
ADD . .
WORKDIR $GOPATH/example-backend
RUN go build -o server .
EXPOSE 8080
CMD ["/go/example-backend/server"]

