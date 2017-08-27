import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {PinDialog} from "@ionic-native/pin-dialog";
import {AggiungiPage} from "../aggiungi/aggiungi";
import {System} from "../../model/System";
import {SceltaComandoPage} from "../scelta-comando/scelta-comando";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  listaSistemiHome: Array<System>;
  listaSistemiNomi = [];
  tmp: number = 0;
  nomeSistema: string;

  constructor(public navCtrl: NavController, private pinDialog: PinDialog, private alertCtrl: AlertController, public navParams: NavParams) {

    this.listaSistemiHome = JSON.parse(localStorage.getItem("todos"));
    for (let i in this.listaSistemiHome) {
      if (!isNullOrUndefined(this.listaSistemiHome[i].nome)) {
        let nomeSistema = this.listaSistemiHome[i].nome;
        this.listaSistemiNomi[this.tmp] = nomeSistema;
        this.tmp = this.tmp + 1;
      }
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Home Page');
  }

  ionViewWillEnter() {
    this.pinFunction();
    console.log('ionViewWillEnter Home Page');
  }

  pinFunction() {
    console.log("il pin nel local storage :" + localStorage.getItem("pin"));
    if (localStorage.getItem("pin") !== null) {
      this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
        .then(
          (result: any) => {
            console.log(result.buttonIndex);
            console.log(result.input1);
            if (result.input1 === localStorage.getItem("pin")) {
              console.log("pin inserito correttamente:");
              let alert = this.alertCtrl.create({
                title: 'Credenziali Corrette',
                subTitle: 'Pin valido',
                buttons: ['Ok']
              });
              alert.present();

            }
            // else if (result.buttonIndex !== pinDaVerificare) {
            else {
              console.log('Wrong pin');
              let alert = this.alertCtrl.create({
                title: 'Credenziali errate',
                subTitle: 'Pin errato',
                buttons: ['Ok']
              });
              alert.present();
              this.pinFunction();
            }
          }
        );
    }

  }

  sendToAddSystem() {
    this.navCtrl.setRoot(AggiungiPage);
  }

  goToComand(nome) {
    for (let i in this.listaSistemiHome) {
      if (this.listaSistemiHome[i].nome === nome) {
        let sistemaDaGestire = this.listaSistemiHome[i].nome;
        console.log("sistema da gestire: " + sistemaDaGestire);
        this.navCtrl.push(SceltaComandoPage, {
          sistema: nome
        });
      }
    }
  }
}

