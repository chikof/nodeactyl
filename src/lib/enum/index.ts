export const enum RequestEndpoints {
	// Get methods
	GET_ACCOUNT_DETAILS = 'client/account',
	GET_ACCOUNT_PERMISSIONS = 'client/permissions',
	GET_ALL_SERVERS = 'client?page=1',
	GET_API_KEYS = 'client/account/api-keys',
	// Aplication
	GET_APLICATION_ALL_SERVERS = 'application/servers?page=1',
	GET_APLICATION_ALL_USERS = 'application/users?page=1',
	GET_APLICATION_ALL_LOCATIONS = 'application/locations?page=1',
	GET_APLICATION_ALL_NODES = 'application/nodes?page=1',

	// Post methods
	CREATE_API_KEY = 'client/account/api-keys',

	// Put methods
	UPDATE_EMAIL = 'client/account/email',
	UPDATE_PASSWORD = 'client/account/password'
}
