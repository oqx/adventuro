// @ts-check
/**
 * @summary Converts routes payload into an array consumable
 * by a select input.
 *
 * @param {Promise<import('./Api').RouteObject[]>} promise
 *
 * @returns {Promise<import('./Options').OptionObject[]>}
 */
export const deriveOptionsFromRoutes = async (promise) => {
  const routes = await promise;
  return routes.map((route) => ({
    label: route.route_label,
    value: route.route_id,
  }));
};

/**
 * @summary Converts routes payload into an array consumable
 * by a select input.
 *
 * @param {Promise<import('./Api').DirectionObject[]>} promise
 *
 * @returns {Promise<import('./Options').OptionObject[]>}
 */
export const deriveOptionsFromDirections = async (promise) => {
  const directions = await promise;
  return directions.map((route) => ({
    label: route.direction_name,
    value: route.direction_id,
  }));
};
/**
 * @summary Converts routes payload into an array consumable
 * by a select input.
 *
 * @param {Promise<import('./Api').StopObject[]>} promise
 *
 * @returns {Promise<import('./Options').OptionObject[]>}
 */
export const deriveOptionsFromStops = async (promise) => {
  const stops = await promise;
  return stops.map((stop) => ({
    label: stop.description,
    value: stop.place_code,
  }));
};
