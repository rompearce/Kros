import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {SettingPage} from "../pages/setting/setting";
import {ContattiPage} from "../pages/contatti/contatti";
import {System} from "../model/System";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{ title: string, component: any }>;
  sistemaSherpa:System = new System();
  sistemaSuperquad:System = new System();
  listaSistemiHome: Array<System>;



  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();
    this.listaSistemiHome = JSON.parse(localStorage.getItem("todos"));
    if (this.listaSistemiHome === null) {
      console.log("Stai nell if del costruttore");

      this.sistemaSherpa.nome = "SHERPA";
      this.sistemaSherpa.nomeComando1 = "Accensione Totale";
      this.sistemaSherpa.testoComando1 = "TOTALE";
      this.sistemaSherpa.nomeComando2 = "Accensione Parz1";
      this.sistemaSherpa.testoComando2 = "PARZ1";
      this.sistemaSherpa.nomeComando3 = "Accensione Parz1";
      this.sistemaSherpa.testoComando3 = "PARZ2";
      this.sistemaSherpa.nomeComando4 = "Spento";
      this.sistemaSherpa.testoComando4 = "SPENTO";
      this.sistemaSherpa.nomeComando5 = "Stato";
      this.sistemaSherpa.testoComando5 = "STATO";
      this.sistemaSherpa.nomeComando6 = "Uscita1";
      this.sistemaSherpa.testoComando6 = "OUT1";
      this.sistemaSherpa.nomeComando7 = "Uscita2";
      this.sistemaSherpa.testoComando7 = "OUT2";

      this.sistemaSuperquad.nome = "SUPERQUAD 400 GSM";
      this.sistemaSuperquad.nomeComando1 = "Stato Impianto";
      this.sistemaSuperquad.testoComando1 = "STA IMP ON OFF";
      this.sistemaSuperquad.nomeComando2 = "Esistenza in vita";
      this.sistemaSuperquad.testoComando2 = "STA";
      this.sistemaSuperquad.nomeComando3 = "Accensione Uscita 1";
      this.sistemaSuperquad.testoComando3 = "OUT 1 ON";
      this.sistemaSuperquad.nomeComando4 = "Spegni Uscita 1";
      this.sistemaSuperquad.testoComando4 = "OUT 1 OFF";
      this.sistemaSuperquad.nomeComando5 = "Accensione Uscita 2";
      this.sistemaSuperquad.testoComando5 = "OUT 2 ON";
      this.sistemaSuperquad.nomeComando6 = "Spegni Uscita 2";
      this.sistemaSuperquad.testoComando6 = "OUT 2 OFF";
      this.sistemaSuperquad.nomeComando7 = "Memoria Eventi";
      this.sistemaSuperquad.testoComando7 = "MEM";
      this.sistemaSuperquad.nomeComando8 = "Credito Residuo";
      this.sistemaSuperquad.testoComando8 = "CRE";

      let listaSistemiProva: any = [];
      listaSistemiProva.push(this.sistemaSherpa);
      listaSistemiProva.push(this.sistemaSuperquad);
      localStorage.setItem('todos', JSON.stringify(listaSistemiProva));
    } else {
      console.log("Stai nell else del costruttore");
    }

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Impostazioni', component: SettingPage},
      {title: 'Contatti', component: ContattiPage},

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
