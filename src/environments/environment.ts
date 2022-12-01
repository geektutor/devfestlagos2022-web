// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'devfestlagos-2022',
    appId: '1:163954857780:web:60fbaf5d9cb54115ae3761',
    storageBucket: 'devfestlagos-2022.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBI-Uk6IW54nMvBgxX7CPsgx0lMo58otfQ',
    authDomain: 'devfestlagos-2022.firebaseapp.com',
    messagingSenderId: '163954857780',
    measurementId: 'G-CR8TKECQD9',
  },
  production: false,
  baseUrl: "https://us-central1-devfestlagos-2022.cloudfunctions.net/api"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
