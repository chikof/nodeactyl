import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { NodeactylError } from './errors';
import type { AccountAttribute, AccountDetails, ClientPermissions, NodeactylOptions } from './types';
import { RequestEndpoints } from '..';

/**
 * {@link NodeactylClient} class
 * @example
 * ```js
 * const { NodeactylClient } = require('@chikoshidori/nodeactyl');
 *
 * const client = new NodeactylClient({
 * 		apiUrl: 'https://panel.chikum.me/api/',
 * 		key: '123456789',
 * });
 * client.getAccountDetails.then(console.log)
 * ```
 */
export class NodeactylClient {
	public constructor(private options: NodeactylOptions) {
		if (typeof options.apiUrl !== 'string') throw new NodeactylError('No API URL provided.');
		if (typeof options.key !== 'string') throw new NodeactylError('No API key provided.');
	}

	public get getAccountDetails(): Promise<AccountDetails<AccountAttribute>> {
		return new Promise(async (resolve) => {
			const result = await fetch<AccountDetails<AccountAttribute>>(
				`${this.options.apiUrl}${RequestEndpoints.GET_ACCOUNT_DETAILS}`,
				{
					headers: { ...this.getHeaders }
				},
				FetchResultTypes.JSON
			).catch(() => {
				this.error('An error occurred while obtaining the account details.');
			});

			return resolve(result);
		});
	}

	public get getAccountPermissions(): Promise<ClientPermissions> {
		return new Promise(async (resolve) => {
			const result = await fetch<ClientPermissions>(
				`${this.options.apiUrl}${RequestEndpoints.GET_ACCOUNT_PERMISSIONS}`,
				{
					headers: { ...this.getHeaders }
				},
				FetchResultTypes.JSON
			).catch(() => {
				this.error('An error occurred while obtaining the account permissions.');
			});

			return resolve(result);
		});
	}

	private error(error: string): never {
		throw new NodeactylError(error);
	}

	private get getHeaders() {
		return {
			Authorization: `Bearer ${this.options.key}`,
			'Content-Type': 'application/json',
			Accept: 'Application/vnd.pterodactyl.v1+json'
		};
	}
}
