import { asyncHandler } from '../utils/asyncHandler';

const healtcheck = asyncHandler(async (req, res, next) => {
	return res
		.status(200)
		.json(
			new ApiResponse(200, {}, 'HealthCheck Successfully!! Server is running')
		);
});
export { healtcheck };
