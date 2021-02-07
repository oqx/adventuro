import { DirectionObject, RouteObject, StopObject } from './Api'
export type OptionObject = {
    label: string
    value: string | number
}

export function deriveOptionsFromRoutes(routes: RouteObject[]): OptionObject[]
export function deriveOptionsFromDirections(directions: DirectionObject[]): OptionObject[]
export function deriveOptionsFromStops(routes: StopObject[]): OptionObject[]
