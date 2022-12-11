import { PrismaClient } from '@prisma/client';

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prismaClient = new PrismaClient();
} else {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (!(global as any).prismaClient) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(global as any).prismaClient = new PrismaClient();
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	prismaClient = (global as any).prismaClient;
}

export default prismaClient;
