import { EventEmitter } from 'events';

import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { NodeactylError } from './errors';
import type { AccountDetails, NodeactylOptions } from './types';
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
export class NodeactylClient extends EventEmitter {
	public constructor(private options: NodeactylOptions) {
		super();
		if (typeof options.apiUrl !== 'string') throw new NodeactylError('No API URL provided.');
		if (typeof options.key !== 'string') throw new NodeactylError('No API key provided.');
	}

	public get getAccountDetails(): Promise<AccountDetails> {
		return new Promise(async (resolve) => {
			const result = await fetch<AccountDetails>(
				`${this.options.apiUrl}${RequestEndpoints.GET_ACCOUNT_DETAILS}`,
				{
					headers: {
						...this.getHeaders
					}
				},
				FetchResultTypes.JSON
			).catch(() => {
				throw new NodeactylError('Failed to get account details.');
			});

			return resolve(result);
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
