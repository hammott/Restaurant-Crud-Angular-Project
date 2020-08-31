# Restaurant-Crud-Angular-Project


## creat fake API with json server
`npm install -g json-server`

## Start JSON Server
`json-server --watch db.json`

## Example : get data with query like this
`http://localhost:3000/restaurants?q=kfc`

## Add Bottstrap Package
`npm i --save bootstrap`

and add this in angular.json
`
"styles":   [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
              "src/styles.css"
            ]
`

and this in style.css
`
@import '~bootstrap/dist/css/bootstrap.min.css';
`


## Generate a service
`ng g service resto`