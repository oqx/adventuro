/**
 * @summary Creates an inline web worker.
 *
 * @param {Function} fn
 *
 * @returns {Worker}
 */
const createWorker = (fn) => {
  const blob = new Blob(["self.onmessage = ", fn.toString()], {
    type: "text/javascript",
  });
  return new Worker(URL.createObjectURL(blob));
};

/**
 * @summary Creates an inline web worker that fetches data.
 */
const createRequestWorker = () =>
  createWorker(({ data }) => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        /* eslint-disable-next-line */
        self.postMessage(JSON.parse(xhr.responseText));
      }
    };
    
    xhr.open("GET", data);
    xhr.send();
  });

class Fetcher {
    /**
     * Initializes a web worker for requests, posts a url which
     * is consumed by the worker and added to an XHR request.
     * 
     * @param {string} url 
     * 
     * @returns {Promise<any>}
     */
  _get(url) {
    const worker = createRequestWorker();
    worker.postMessage(url);
    return {
      worker,
      promise: new Promise((resolve) => {
        worker.onmessage = (result) => {
          resolve(result.data);
        };
      }),
    };
  }

  /**
   * Retrieves data from a web worker and terminates it immediately afterword.
   * 
   * @param {string} url 
   * 
   * @returns {any}
   */
  async get(url) {
    const { worker, promise } = this._get(url);
    const data = await promise;
    worker.terminate();
    return data;
  }
}

export default new Fetcher();
