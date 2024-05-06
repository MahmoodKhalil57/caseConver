import type { ApiStructureStructure } from '$src/lib/utils/apiUtils/server/ApiUtils.type.server';
import { z } from 'zod';
import type { middlewareMap } from '$api/helpers/middleware.server';

export const apiStructure = {
	testRouter: {
		testGet: {
			requestType: 'GET',
			validation: z.object({}) satisfies z.AnyZodObject
		}
	}
} satisfies ApiStructureStructure<typeof middlewareMap>;
