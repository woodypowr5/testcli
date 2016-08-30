import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
// import { Store, StoreModule } from '@ngrx/store';
// import { NgModule } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
