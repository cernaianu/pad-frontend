import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER,NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecureModule} from "./secure/secure.module";
import {PublicModule} from "./public/public.module";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../../../common/src/lib/interceptors/token.interceptor";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PromptComponent } from './prompt/prompt.component';
import { PwaService } from './services/pwa.service';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OverlayModule } from '@angular/cdk/overlay';
const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();
@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    OverlayModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
      MatBottomSheet,
      {
        provide: APP_INITIALIZER,
        useFactory: initializer,
        deps: [PwaService],
        multi: true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private pwaService: PwaService) {
  this.pwaService.initPwaPrompt();
  }
}
