/**
 * The main environment object for the app
 * put variables here that will configure the
 * app to run in different environments.
 */
export const environment = {
  environment: "dev",
  applicationNamespace: "test",
  sentryEnabled: false,
  // globally enable or disable mock testing
  mockTestingEnabled: false,
  // enable or disable mocks for each service
  // you can also enable and disable different
  // mock options for each service here
  mocks: {
    auth: {
      enabled: true,
      mockAuthForceLoggedIn: true
    },
    quotes: {
      enabled: false
    }
  },
  baseUrl: "http://localhost/",
  apiUrl: "api/",
};
