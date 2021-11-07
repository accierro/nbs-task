package datasource

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	PropertiesCollection *mongo.Collection
)

func MongoSetup() {
	host := "127.0.0.1"
	port := "27017"
	uri := "mongodb://" + host + ":" + port + "/"
	clientOptions := options.Client().ApplyURI(uri)
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database("property-app")
	PropertiesCollection = db.Collection("properties")
}
