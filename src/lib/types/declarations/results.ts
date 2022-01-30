export interface AccountAttribute {
	id: number;
	admin: boolean;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	language: string;
}

export interface AccountDetails<T> {
	object: string;
	attribute: T;
}

export interface AttributeDetailKeys {
	connect: string;
	console: string;
	start: string;
	stop: string;
	restart: string;
	delete: string;
	update: string;
	archive: string;
	sftp: string;
	read: string;
	download: string;
	create: string;
	view_password: string;
	rename: string;
	reinstall: string;
}

export interface AttributeDetails<K extends keyof AttributeDetailKeys> {
	descripton: string;
	keys: Pick<AttributeDetailKeys, K>;
}

export interface PermissionAttributeList {
	websocket: AttributeDetails<'connect'>;
	control: AttributeDetails<'console' | 'start' | 'stop' | 'restart'>;
	user: AttributeDetails<'create' | 'read' | 'update' | 'delete'>;
	file: AttributeDetails<'archive' | 'sftp' | 'create' | 'delete' | 'update' | 'read'>;
	backup: AttributeDetails<'create' | 'read' | 'update' | 'delete' | 'download'>;
	allocation: AttributeDetails<'read' | 'create' | 'update' | 'delete'>;
	startup: AttributeDetails<'read' | 'update'>;
	database: AttributeDetails<'create' | 'read' | 'update' | 'delete' | 'view_password'>;
	schedule: AttributeDetails<'create' | 'read' | 'update' | 'delete'>;
	settings: AttributeDetails<'rename' | 'reinstall'>;
}
export interface PermissionsAttributes {
	permisions: PermissionAttributeList;
}

export type ClientPermissions = AccountDetails<PermissionsAttributes>;
