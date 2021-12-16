export interface AccountAttribute {
	id: number;
	admin: boolean;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	language: string;
}

export interface AccountDetails {
	object: string;
	attribute: AccountAttribute;
}
