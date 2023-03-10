import { AppRoutingModule } from './app-routing.module';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        NovaTransferenciaComponent,
        ExtratoComponent,
    ],
    providers: [
      {provide: LOCALE_ID, useValue: 'pt'},
      {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
