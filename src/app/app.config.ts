import { Config } from 'ontimize-web-ngx';

import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: 'https://try.ontimize.com/QSAllComponents/rest',

  //  Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
  uuid: 'com.ontimize.web.ng2.playground',

  // Title of the app
  title: 'Playground',

  //  Language of the application.
  // locale: 'en',

  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation) in the whole application.
  // serviceType

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG,

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en']
};
