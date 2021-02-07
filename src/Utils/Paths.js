const PATH_MAP = {
    0: 'route',
    1: 'direction',
    2: 'stop'
}

/**
 * @summary Converts pathname string into an array via split.
 * 
 * @param {string} pathname 
 * 
 * @returns {Array<string>}
 */
export const convertPathnameToArray = (pathname) => pathname.split('/').filter(Boolean)

/**
 * @summary Converts pathname string into an object.
 * 
 * @param {string} pathname 
 * 
 * @returns {{[key: string]: string}} Object of pathnames.
 */
export const convertPathnameToObject = (pathname) => convertPathnameToArray(pathname).reduce((acc, path, i) => {
    acc[PATH_MAP[i]] = path
    return acc
}, {})