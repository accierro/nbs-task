package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Property struct {
	Id            primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	PropertyType  string             `json:"propertyType" bson:"propertyType"`
	Description   string             `json:"description" bson:"description"`
	AvailableDate time.Time          `json:"availableDate" bson:"availableDate"`
	CreatedAt     time.Time          `json:"createdAt" bson:"createdAt"`
	BedRooms      int                `json:"bedRooms" bson:"bedRooms"`
	BathRooms     int                `json:"bathRooms" bson:"bathRooms"`
	IsForSale     bool               `json:"isForSale" bson:"isForSale"`
	Price         int                `json:"price" bson:"price"`
	AddressLine1  string             `json:"addressLine1" bson:"addressLine1"`
	AddressLine2  string             `json:"addressLine2" bson:"addressLine2"`
	City          string             `json:"city" bson:"city"`
	Postcode      string             `json:"postcode" bson:"postcode"`
}
