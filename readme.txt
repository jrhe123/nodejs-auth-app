1. Restful API: Node.js / Express
2. Token Generation & Authentication: JWT (Json Web Token)
3. CORS: Back-end, Front-end (separate), different ports
4. Mongoose ODM
5. Angular 2 / Angular-CLI
6. Angular Router, HTTP Module
7. Angular2 JWT (Token form Server, stored in local, token authenication validation)
8. Auth Guard (Login Session Authentication)
9. Angular Flash Message Module (Notification Message)
10. Compile & Deploy in Heroku


API:

1. POST
http://localhost:3000/users/register
{
	"name": "Roy he",
	"email": "roytest@mailinator.com",
	"username": "jrhe",
	"password": "123456"	
}

2. POST
http://localhost:3000/users/authenticate
{
	"username": "jrhe",
	"password": "123456"	
}

3. GET
Authorization: 'TOKEN' from authenticate
http://localhost:3000/users/profile