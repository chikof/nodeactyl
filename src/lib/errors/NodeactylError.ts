export class NodeactylError extends Error {
	public constructor(message: string) {
		super(`\u001b[31m[Nodeactyl]\u001b[0m ${message}`);
	}
}
