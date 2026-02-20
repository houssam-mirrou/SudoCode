package main

import (
	"fmt"
	"log"
	"time"

	"context"

	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

func main() {

	fmt.Println("🚀 CodeJudge Worker Started...")

	rdb := redis.NewClient(&redis.Options{
		Addr: "redis:6379",
	})

	for {
		result, err := rdb.BLPop(ctx, 0*time.Second, "submissions").Result()
		if err != nil {
			log.Println("Redis error:", err)
			continue
		}

		submissionID := result[1]
		fmt.Println("📥 Received submission ID:", submissionID)

		// TODO:
		// 1. Fetch submission from PostgreSQL
		// 2. Execute inside Docker
		// 3. Update verdict
	}
}
