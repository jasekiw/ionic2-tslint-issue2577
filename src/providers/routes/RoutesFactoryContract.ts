
/**
 * An environment helper to get fully qualified urls
 */

export interface RoutesFactoryContract {

  /**
   * Generates a url given from the environment that is a api url meaning it will contain the api base url.
   * @param {string} url The url with placeholder templates in it. placeholder templates look like this: {id}
   * @param {Object} parameters key to value mapping of placeholder name to the real value. The keys shall not include the {}
   * @return string The rendered url
   */
  getApiUrl(url: string, parameters?: Object): string;

  /**
   * Generates a url given from the environment.
   * @param {string} url The url with placeholder templates in it. placeholder templates look like this: {id}
   * @param {Object} parameters key to value mapping of placeholder name to the real value. The keys shall not include the {}
   * @return string The rendered url
   */
  getUrl(url: string, parameters?: Object): string;
}
