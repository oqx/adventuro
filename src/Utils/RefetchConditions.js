/**
 * @summary A condition that determines whether direction options need
 * to be refetched.
 * 
 * @param {string} diff The difference between current pathnames and pathnames on last render.
 * 
 * @returns {boolean}
 */
export const refetchOnDirectionChange = (diff = '') => {
    if(diff === 'route') return true
    return false
}

/**
 * @summary A condition that determines whether stop options need
 * to be refetched.
 * 
 * @param {string} diff The difference between current pathnames and pathnames on last render.
 * 
 * @returns {boolean}
 */
export const refetchOnStopChange = (diff = '') => {
    if(diff === 'direction' || diff === 'route') return true
    return false
}

/**
 * @summary A map that retrives refetch conditions.
 */
export const REFETCH_MAP = {
    route: () => false,
    direction: refetchOnDirectionChange,
    stop: refetchOnStopChange
}