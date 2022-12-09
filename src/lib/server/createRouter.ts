import * as trpc from '@trpc/server';

export async function createContext() {}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
	return trpc.router<Context>();
}
