import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {RoutesFactoryContract} from "./RoutesFactoryContract";
import {Platform} from "ionic-angular"; // example of bad behavior

 /**
 * An environment helper to get fully qualified urls
 */
@Injectable()
export class RoutesFactory implements RoutesFactoryContract {

  /**
   * Generates a url given from the environment that is a api url meaning it will contain the api base url.
   * @param {string} url The url with placeholder templates in it. placeholder templates look like this: {id}
   * @param {Object} parameters key to value mapping of placeholder name to the real value. The keys shall not include the {}
   * @return string The rendered url
   */
  public getApiUrl(url: string, parameters?: Object): string {
    url = this.parseParameters(url, parameters);
    return environment.baseUrl + environment.apiUrl + url;
  }

  /**
   * Generates a url given from the environment.
   * @param {string} url The url with placeholder templates in it. placeholder templates look like this: {id}
   * @param {Object} parameters key to value mapping of placeholder name to the real value. The keys shall not include the {}
   * @return string The rendered url
   */
  public getUrl(url: string, parameters?: Object): string {
    url = this.parseParameters(url, parameters);
    return environment.baseUrl  + url;
  }

  /**
   * Parses the parameters and replaces them with their actual values
   * @param {string} url The url to parse
   * @param {Object} parameters The parameters to replace with
   * @returns {string} the new url
   */
  protected parseParameters(url: string, parameters?: Object): string {
    if (parameters)
      Object.keys(parameters).forEach((key) => url = url.split('{' + key + '}').join(parameters[key]));
    return url;
  }

}
