// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    // api: "https://api-dev.cutetix.rudickamladez.cz",
    api: "http://localhost:8000",
    // socketio: "https://api-dev.cutetix.rudickamladez.cz/ws"
  },
  keycloak: {
    // TODO: Update realm
    issuer: 'https://auth.lukasmatuska.cz/realms/pohles',
    clientId: 'admin-v2',
    clientSecret: 'poW7Tr4edeEKUXf8dGQjpTymye6L4rRW',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: true,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
