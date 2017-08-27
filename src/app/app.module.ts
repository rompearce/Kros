import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SMS} from "@ionic-native/sms";
import {PinDialog} from "@ionic-native/pin-dialog";
import {AggiungiPage} from "../pages/aggiungi/aggiungi";
import {SceltaComandoPage} from "../pages/scelta-comando/scelta-comando";
import {ModificaSistemaPage} from "../pages/modifica-sistema/modifica-sistema";
import {ContattiPage} from "../pages/contatti/contatti";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingPage,
    HomePage,
    TabsPage,
    AggiungiPage,
    SceltaComandoPage,
    ModificaSistemaPage,
    ContattiPage
  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingPage,
    HomePage,
    TabsPage,
    AggiungiPage,
    SceltaComandoPage,
    ModificaSistemaPage,
    ContattiPage
  ],
  providers: [
    PinDialog,
    SMS,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
