import { provideHttpClient, withFetch } from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import {
  provideTanStackQuery,
  QueryClient,
  withDevtools,
} from '@tanstack/angular-query-experimental'

import { environment } from '../environments/environment'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideTanStackQuery(
      new QueryClient(),
      withDevtools(() => ({ loadDevtools: !environment.production })),
    ),
  ],
}
