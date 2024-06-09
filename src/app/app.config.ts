import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { JwtInterceptor } from './Services/interceptors/interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
};
