import { EventEmitter } from 'events';

import { request } from './functions';
import { NodeactylError } from './errors';
import type { AccountDetails, NodeactylOptions } from './types';
import { RequestEndpoints } from '..';

/**
 * Nodeactyl class
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
export class NodeactylClient extends EventEmitter {
	public constructor(private options: NodeactylOptions) {
		super();
		if (typeof options.apiUrl !== 'string') throw new NodeactylError('No API URL provided.');
		if (typeof options.key !== 'string') throw new NodeactylError('No API key provided.');
	}

	public get getAccountDetails(): Promise<AccountDetails> {
		return new Promise(async (resolve) => {
			const { data } = await request(
				`${this.options.apiUrl}${RequestEndpoints.GET_ACCOUNT_DETAILS}`,
				{
					method: 'GET'
				},
				this.getHeaders
			).catch(() => {
				throw new NodeactylError('Failed to get account details.');
			});

			return resolve(data);
		});
	}

	private get getHeaders() {
		return {
			Authorization: `Bearer ${this.options.key}`,
			'Content-Type': 'application/json',
			Accept: 'Application/vnd.pterodactyl.v1+json'
		};
	}
}
