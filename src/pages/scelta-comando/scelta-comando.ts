import {Component} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {System} from "../../model/System";
import {SMS} from "@ionic-native/sms";

/**
 * Generated class for the SceltaComandoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scelta-comando',
  templateUrl: 'scelta-comando.html',
})
export class SceltaComandoPage {

  nomeSistema: string;
  listaSistemiSceltaComando: Array<System>;
  sistemaDaUsare: System;
  listaNomeComandi = [];
  listaCodiceComandi = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {
    this.nomeSistema = this.navParams.get("sistema");
    console.log("passaggio del parametro in scelta comando" + this.nomeSistema);
    this.listaSistemiSceltaComando = JSON.parse(localStorage.getItem("todos"))
    for (let i in this.listaSistemiSceltaComando) {
      console.log(i);
      if (this.listaSistemiSceltaComando[i].nome === this.nomeSistema) {
        this.sistemaDaUsare = this.listaSistemiSceltaComando[i];
      }
    }
    this.loadComandSystem();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SceltaComandoPage');
  }

  loadComandSystem() {
    if (this.sistemaDaUsare.testoComando1 != null) {
      console.log("sto nell if 1");
      this.listaNomeComandi[0] = this.sistemaDaUsare.nomeComando1;
      this.listaCodiceComandi[0] = this.sistemaDaUsare.testoComando1;
    }
    if (this.sistemaDaUsare.testoComando2 != null) {
      console.log("sto nell if 2");
      this.listaNomeComandi[1] = this.sistemaDaUsare.nomeComando2;
      this.listaCodiceComandi[1] = this.sistemaDaUsare.testoComando2;
    }
    if (this.sistemaDaUsare.testoComando3 != null) {
      console.log("sto nell if 3");
      this.listaNomeComandi[2] = this.sistemaDaUsare.nomeComando3;
      this.listaCodiceComandi[2] = this.sistemaDaUsare.testoComando3;
    }
    if (this.sistemaDaUsare.testoComando4 != null) {
      console.log("sto nell if 4");
      this.listaNomeComandi[3] = this.sistemaDaUsare.nomeComando4;
      this.listaCodiceComandi[3] = this.sistemaDaUsare.testoComando4;
    }
    if (this.sistemaDaUsare.testoComando5 != null) {
      console.log("sto nell if 5");
      this.listaNomeComandi[4] = this.sistemaDaUsare.nomeComando5;
      this.listaCodiceComandi[4] = this.sistemaDaUsare.testoComando5;
    }
    if (this.sistemaDaUsare.testoComando6 != null) {
      console.log("sto nell if 6");
      this.listaNomeComandi[5] = this.sistemaDaUsare.nomeComando6;
      this.listaCodiceComandi[5] = this.sistemaDaUsare.testoComando6;
    }
    if (this.sistemaDaUsare.testoComando7 != null) {
      console.log("sto nell if 7");
      this.listaNomeComandi[6] = this.sistemaDaUsare.nomeComando7;
      this.listaCodiceComandi[6] = this.sistemaDaUsare.testoComando7;
    }
    if (this.sistemaDaUsare.testoComando8 != null) {
      console.log("sto nell if 8");
      this.listaNomeComandi[7] = this.sistemaDaUsare.nomeComando8;
      this.listaCodiceComandi[7] = this.sistemaDaUsare.testoComando8;
    }
    if (this.sistemaDaUsare.testoComando9 != null) {
      console.log("sto nell if 9");
      this.listaNomeComandi[8] = this.sistemaDaUsare.nomeComando9;
      this.listaCodiceComandi[8] = this.sistemaDaUsare.testoComando9;
    }
    if (this.sistemaDaUsare.testoComando10 != null) {
      console.log("sto nell if 10");
      this.listaNomeComandi[9] = this.sistemaDaUsare.nomeComando10;
      this.listaCodiceComandi[9] = this.sistemaDaUsare.testoComando10;
    }

    console.log(this.listaCodiceComandi);
    console.log(this.listaNomeComandi);
  }

  sendSms(comando) {
    let nomeComandoSMS: string;
    let codiceComandoSMS: string;
    let indice = this.listaNomeComandi.indexOf(comando);
    let numero = this.sistemaDaUsare.numeroGSM;
    nomeComandoSMS = this.listaNomeComandi[indice];
    codiceComandoSMS = this.listaCodiceComandi[indice];
    console.log(nomeComandoSMS);
    console.log(codiceComandoSMS);
    let actionSheet = this.actionSheetCtrl.create({
      title: "Conferma Invio Comando",
      buttons: [
        {
          text: 'Invia',
          icon: 'share-alt',
          handler: () => {
            this.sms.send(numero, codiceComandoSMS);
            let confirm = this.alertCtrl.create({
              title: 'Messaggio inviato',
              subTitle: 'Inviato comando ' + nomeComandoSMS + ' al numero GSM ' + numero,
              buttons: ['OK']
            });
            confirm.present();
          }
        },
        {
          text: 'Annulla',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();

  }

}



