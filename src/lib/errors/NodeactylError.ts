export class NodeactylError extends Error {
	public constructor(message: string) {
		super(`Nodeactyl: ${message}`);
	}
}
