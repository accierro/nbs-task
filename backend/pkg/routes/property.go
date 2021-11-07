package routes

import (
	"github.com/accierro/nbs-test/pkg/controllers"
	"github.com/gorilla/mux"
)

var RegisterPropertyRoutes = func(router *mux.Router) {
	router.HandleFunc("/property", controllers.CreateProperty).Methods("POST", "OPTIONS")
	router.HandleFunc("/property", controllers.GetProperties).Methods("GET")
	router.HandleFunc("/property/{id}", controllers.GetPropertyById).Methods("GET")
	router.HandleFunc("/property/{id}", controllers.UpdateProperty).Methods("PUT")
	router.HandleFunc("/property/{id}", controllers.DeleteProperty).Methods("DELETE", "OPTIONS")
}
