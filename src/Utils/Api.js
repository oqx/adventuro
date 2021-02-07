// @ts-check
import compose from 'lodash.compose'
import * as fromOptions from './Options'
import fetcher from './Fetcher'
/** 
 * @summary Catches request errors and handles failed requests.
 * 
 * @type {import('./Api')._responseHandler} 
 */
const _responseHandler = async(promise) => {
    try {
        return await promise
    } catch(err) {
        throw new Error(err)
    }
}

const _fetchAllRoutes = () => fetcher.get('https://svc.metrotransit.org/nextripv2/routes')


/**
 * Initial request for retrieving destination by route.
 * 
 * @type {import('./Api').fetchAllRoutes}
 */
// @ts-ignore
export const fetchAllRoutes = compose(fromOptions.deriveOptionsFromRoutes, _responseHandler, _fetchAllRoutes)

/**
 * Retrieves directions based on route parameter.
 * 
 * @param route Route user selects that determines available
 * directions.
 * 
 * @type {import('./Api')._fetchDirections}
 */
export const _fetchDirections = async({route}) => fetcher.get(`https://svc.metrotransit.org/nextripv2/directions/${route}`)

/**
 * Retrieves directions based on route parameter.
 * 
 * @param route Route user selects that determines available
 * directions.
 * 
 * @type {import('./Api').fetchDirections}
 */
// @ts-ignore
export const fetchDirections = compose(fromOptions.deriveOptionsFromDirections, _responseHandler, _fetchDirections)

/**
 * Retrieves all stops.
 * 
 * @type {import('./Api')._fetchStops}
 */
export const _fetchStops = async({route, direction}) => fetcher.get(`https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}`)

/**
 * Retrieves all stops.
 * 
 * @type {import('./Api').fetchStops}
 */
// @ts-ignore
export const fetchStops = compose(fromOptions.deriveOptionsFromStops, _responseHandler, _fetchStops)

/**
 * Returns trip data generated from all previous parameters.
 * 
 * @type {import('./Api')._fetchTrip}
 */
export const _fetchTrip = async({route, direction, stop}) => fetcher.get(`https://svc.metrotransit.org/nextripv2/${route}/${direction}/${stop}`)

export const fetchTrip = compose(_responseHandler, _fetchTrip)

export const API_MAP = {
    route: fetchAllRoutes,
    direction: fetchDirections,
    stop: fetchStops
}


