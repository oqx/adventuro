export type DirectionObject = {
    direction_id: number
    direction_name: string
}

export type RouteObject = {
    route_id: string, 
    agency_id: number, 
    route_label: string
}

export type StopObject = {
    place_code: string, 
    description: string
}

export type TripDepartureObject = {
    actual: boolean
    departure_text: string
    /* Date number */
    departure_time: number
    description: string
    direction_id: number
    direction_text: string
    route_id: string
    route_short_name: string
    schedule_relationship: string
    stop_id: number
    trip_id: string
}

export type TripStopObject = {
    description: string
    latitude: number
    longitude: number
    stop_id: number
}

export type TripResponse = {
    departures: TripDepartureObject[]
    stops: TripStopObject
}

export type FetchTripParams = FetchStopParams & {
    stop: string
}

export type FetchStopsParams = {
    direction: string
    route: string
}

export type FetchSDirectionsParams = {
    route: string
}

export function _responseHandler<T>(promise: Response): Promise<T> | Promise<Error>
export function _fetchAllRoutes(): Promise<Response>
export function fetchAllRoutes(): Promise<RouteObject[]>
export function _fetchDirections(params: FetchSDirectionsParams): Promise<Response>
export function fetchDirections(params: FetchSDirectionsParams): Promise<DirectionObject[]>
export function _fetchStops(params: FetchStopsParams): Promise<Response>
export function fetchStops(params: FetchStopsParams): Promise<StopObject[]>
export function _fetchTrip(params: FetchTripParams): Promise<Response>
export function fetchTrip(params: FetchTripParams): Promise<TripResponse>

export type API_MAP = {
    route: any
    direction: any
    stop: any
}