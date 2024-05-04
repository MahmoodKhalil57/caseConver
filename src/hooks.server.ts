import { svelteApiHandle } from '$apiUtils/server/apiUtils.server';
import { getContext } from '$api/helpers/context.server';
import { middlewareMap } from '$api/helpers/middleware.server';
import { apiStructure } from '$api/helpers/apiStructure.server';
import { API } from '$api/root.server';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
	svelteApiHandle(apiStructure, getContext, middlewareMap, API, '0.1.4')
);

// const luciaHandle: Handle = async ({ event, resolve }) => {
// 	event.locals.auth = auth.handleRequest(event);
// 	return await resolve(event);
// };

// export const handle = sequence(luciaHandle, apiHook);