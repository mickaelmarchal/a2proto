import { NgModule, ApplicationRef }  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { HttpModule }                from '@angular/http';

import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { APP_DECLARATIONS } from "./app.declarations";
import { APP_IMPORTS }      from "./app.imports";
import { APP_PROVIDERS }    from "./app.providers";

import { AppComponent }     from './app.component';
import { Store } from "@ngrx/store";
import { AppState } from "./core/reducers";


@NgModule({
  declarations: [
    AppComponent,
    APP_DECLARATIONS
  ],
  imports: [
    APP_IMPORTS,
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    private _store: Store<AppState>
  ) { }

  // Hot Module Reloading: when reloading, restore app state using last State
  hmrOnInit(store) {
    if (!store || !store.rootState) return;

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this._store.take(1).subscribe(s => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

