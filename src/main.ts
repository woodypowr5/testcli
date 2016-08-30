import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';s
import { AppModule }              from './app/app.module';
import { AppComponent, environment } from './app/';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);

// import { Store, StoreModule } from '@ngrx/store';
// import { NgModule } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
