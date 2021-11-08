package repository

import (
	"context"
	"fmt"

	"github.com/accierro/nbs-test/pkg/datasource"
	"github.com/accierro/nbs-test/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateProperty(property *models.Property) (string, error) {
	result, err := datasource.PropertiesCollection.InsertOne(context.Background(), property)
	if err != nil {
		return "0", err
	}

	return fmt.Sprintf("%v", result.InsertedID.(primitive.ObjectID).Hex()), nil
}

func GetAllProperties() ([]models.Property, error) {
	var property models.Property
	properties := make([]models.Property, 0)

	cursor, err := datasource.PropertiesCollection.Find(context.Background(), bson.D{})
	if err != nil {
		defer cursor.Close(context.Background())
		return properties, err
	}

	for cursor.Next(context.Background()) {
		err := cursor.Decode(&property)
		if err != nil {
			return nil, err
		}
		properties = append(properties, property)
	}

	return properties, nil
}

func GetPropertyById(id string) (*models.Property, error) {
	objectId, _ := primitive.ObjectIDFromHex(id)
	filterBson := bson.M{"_id": objectId}

	var property models.Property
	err := datasource.PropertiesCollection.FindOne(context.TODO(), filterBson).Decode(&property)

	if err != nil {
		return nil, err
	}

	return &property, nil
}

func UpdateOneProperty(id string, update *models.Property) (*models.Property, error) {
	objectId, _ := primitive.ObjectIDFromHex(id)

	var property models.Property

	filterBson := bson.M{"_id": objectId}
	updateBson := bson.D{
		{"$set", bson.D{
			{"propertyType", update.PropertyType},
			{"description", update.Description},
			{"availableDate", update.AvailableDate},
			{"bedRooms", update.BedRooms},
			{"bathRooms", update.BathRooms},
			{"isForSale", update.IsForSale},
			{"price", update.Price},
			{"addressLine1", update.AddressLine1},
			{"addressLine2", update.AddressLine2},
			{"city", update.City},
			{"postcode", update.Postcode},
		}},
	}
	after := options.After
	options := options.FindOneAndUpdateOptions{
		ReturnDocument: &after,
	}

	err := datasource.PropertiesCollection.FindOneAndUpdate(context.TODO(), filterBson, updateBson, &options).Decode(&property)
	if err != nil {
		return nil, err
	}

	return &property, nil
}

func DeleteOne(id string) (int64, error) {
	objectId, _ := primitive.ObjectIDFromHex(id)

	filter := bson.M{"_id": objectId}

	deleteResult, err := datasource.PropertiesCollection.DeleteOne(context.TODO(), filter)

	return deleteResult.DeletedCount, err
}
