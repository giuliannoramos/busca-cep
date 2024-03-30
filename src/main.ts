import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic([{ provide: provideHttpClient, useValue: withFetch() }]);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
