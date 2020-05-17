// for authorizationServer.js

var clients = [
	{
		client_id: "oauth-client-1",
		client_secret: "oauth-client-secret-1",
		redirect_uris: ["http://localhost:19000/callback"],
		scope: "foo bar"
	}
];



// for client.js

var client = {
	client_id: "oauth-client-1",
	client_secret: "oauth-client-secret-1",
	redirect_uris: ["http://localhost:19000/callback"],
	scope: "foo bar"
};

var authServer = {
	authorizationEndpoint: 'http://localhost:19001/authorize',
	tokenEndpoint: 'http://localhost:19001/token'
};

