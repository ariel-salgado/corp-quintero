import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';

export const createContext = async () => ({});

export const router = trpc.router<inferAsyncReturnType<typeof createContext>>();

export type Router = typeof router;
