# Minimal Go backend Dockerfile
# This is a placeholder until the backend code is implemented

FROM golang:1.23-alpine AS builder

WORKDIR /app

# Copy go mod files if they exist
COPY go.mod go.sum* ./

# Download dependencies if go.mod exists
RUN if [ -f go.mod ]; then go mod download; fi

# Copy source code if it exists
COPY . .

# Build the application if main.go exists
RUN if [ -f main.go ]; then \
    CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .; \
    else \
    echo "package main" > main.go && \
    echo "import \"net/http\"" >> main.go && \
    echo "func main() {" >> main.go && \
    echo "  http.HandleFunc(\"/health\", func(w http.ResponseWriter, r *http.Request) {" >> main.go && \
    echo "    w.WriteHeader(http.StatusOK)" >> main.go && \
    echo "    w.Write([]byte(\"OK\"))" >> main.go && \
    echo "  })" >> main.go && \
    echo "  http.ListenAndServe(\":8080\", nil)" >> main.go && \
    echo "}" >> main.go && \
    CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .; \
    fi

FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]

