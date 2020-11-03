# API-Gateway

This service is intended to be a hub providing a gateway service to microservices requiring JWT authentication, leveraging a standard sessions based client authentication at the front end. 

First iteration will use client authentication only, but will use my existing PostgresQL database for session storage, allowing for multiple instances of the API to be present. 

## Key Libraries
* [Gorilla Sessions](https://github.com/gorilla/sessions) - session management
* [pgstore](https://github.com/antonlindstrom/pgstore) - session storage in PostGresql
* [Goth](https://github.com/markbates/goth) - Oauth2 library

## Sources
I think an extention of the following might be a simple way to get things working...
https://hackernoon.com/writing-a-reverse-proxy-in-just-one-line-with-go-c1edfa78c84b

## Future proofiing:
If I want a longer term reusable API gateway responsible for determining who can access what, I should ensure we have a way of building dynamic route tables and authorization rules at runtime - perhaps from environmental configuration? 


