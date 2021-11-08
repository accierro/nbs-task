# nbs-task
Programming Task.


# How to run?

1. Make sure you use Go `latest` and Node `^14`
2. Run MongoDB locally with open port `27017`
3. Run backend server with `go run ./cmd`, now it must be available on port `8080`
4. Run fronend server with `yarn dev`, now it must be available on port `4000`

# Tech Stack

### Frontend
* Typescript
* Next.js
* React
* Chakra UI for UI components
* React Hook Form for form state managing 
* Yup for data validation
* SWR for data fetching

### Backend
* Go
* Gorilla Mux for router
* MongoDB

# Limitations / Improvements
### Frontend
1. There is no way to edit listing at this moment.
  * The page is already created and I can reuse `Form` component to edit existing property. That includes changing initial values to 
  current property listing values and implement on submit handler for editing.
2. There is no validation on the form. 
  * I would go for `yup` and implement a schema which must match the validation rules on the backend.
3. There is no tests
  * I can't see any implications for unit testing in the current version of app, so I would pursue with `Cypress` in order to check 
  user journeys. That will decrease boilerplate, and accelerate the development process, but must be done with care as without parallel 
  test execution `cypress` could be slow.


### Backend
1. There is no data validation on Backend. 
  * I would use Go Playground Validator library in order to add validation rules to existiong json schemas.
2. There is no authentication/autherization logic. Anyone can edit/delete any property listing.
  * I would choose one of the middleware libraries (Negroni as an example) and add autherization logic to handlers which must be protected.
  That will also require to implement authentication business logic for which I would choose JWT.
3. Error handlers. At this moment server will throw 500 errors if anything goes wrong which is not ideal.
  * I would come up with error message structure and would deal with DB specific error to return proper messages. For example if there is no 
  record with specific `id` I would return 404 erorr rather than 500
4. There is no tests.
  * In that case I would go with unit testing and integration testing using provided library by Golang itself.
