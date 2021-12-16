import axios, { AxiosRequestConfig } from 'axios';

/**
 *
 * @param url the api url
 * @param options axios request options
 * @param headers pterodactyl headers
 * @example
 * ```js
 * const { request, RequestEndpoints } = require('@chikoshidori/nodeactyl');
 *
 * const data = await request(`https://panel.chikum.me/${RequestEndpoints.GET_ACCOUNT_DETAILS}`, {
 *		method: 'GET',
 * });
 *
 * console.log(data);
 * ```
 */
export async function request(url: string, options: AxiosRequestConfig, headers?: { [x: string]: string }) {
	if (headers) Reflect.set(options, 'headers', headers);
	return axios(url, options);
}
