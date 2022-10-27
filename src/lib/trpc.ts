import { browser } from '$app/environment';
import type { ApiRouter } from '$lib/server/trpc';
import * as trpc from '@trpc/client';
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';

const url = browser ? '/trpc' : 'http://localhost:5173/trpc';

export default (loadFetch?: typeof fetch) =>
	trpc.createTRPCClient<ApiRouter>({
		url: loadFetch ? '/trpc' : url,
		...(loadFetch && { fetch: loadFetch })
	});

type Query = keyof ApiRouter['_def']['queries'];
type Mutation = keyof ApiRouter['_def']['mutations'];

export type InferQueryOutput<RouteKey extends Query> = inferProcedureOutput<
	ApiRouter['_def']['queries'][RouteKey]
>;
export type InferQueryInput<RouteKey extends Query> = inferProcedureInput<
	ApiRouter['_def']['queries'][RouteKey]
>;
export type InferMutationOutput<RouteKey extends Mutation> = inferProcedureOutput<
	ApiRouter['_def']['mutations'][RouteKey]
>;
export type InferMutationInput<RouteKey extends Mutation> = inferProcedureInput<
	ApiRouter['_def']['mutations'][RouteKey]
>;
