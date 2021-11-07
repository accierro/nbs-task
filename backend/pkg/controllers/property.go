package controllers

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/accierro/nbs-test/pkg/models"
	"github.com/accierro/nbs-test/pkg/repository"
	"github.com/gorilla/mux"
)

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func CreateProperty(w http.ResponseWriter, r *http.Request) {
	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}

	var newProperty models.Property
	err := json.NewDecoder(r.Body).Decode(&newProperty)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	newProperty.CreatedAt = time.Now()

	res, err := repository.CreateProperty(&newProperty)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(res))
}

func GetProperties(w http.ResponseWriter, r *http.Request) {
	allProperties, err := repository.GetAllProperties()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Can't get properties"))
		return
	}

	res, _ := json.Marshal(allProperties)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetPropertyById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var params = mux.Vars(r)

	property, err := repository.GetPropertyById(params["id"])
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Can't find a property"))
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(property)
}

func UpdateProperty(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var params = mux.Vars(r)

	var updateProperty models.Property
	_ = json.NewDecoder(r.Body).Decode(&updateProperty)

	updatedProperty, err := repository.UpdateOneProperty(params["id"], &updateProperty)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(updatedProperty)
}
func DeleteProperty(w http.ResponseWriter, r *http.Request) {
	setupResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")

	var params = mux.Vars(r)

	deleteResult, err := repository.DeleteOne(params["id"])
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(deleteResult)
}
