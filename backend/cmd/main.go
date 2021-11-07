package main

import (
	"log"
	"net/http"

	"github.com/accierro/nbs-test/pkg/datasource"
	"github.com/accierro/nbs-test/pkg/routes"
	"github.com/gorilla/mux"
)

func main() {
	datasource.MongoSetup()

	r := mux.NewRouter()
	routes.RegisterPropertyRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:8080", r))
}
