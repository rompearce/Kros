import {Component} from '@angular/core';
import {ActionSheetController, AlertController, NavController} from 'ionic-angular';
import {System} from "../../model/System";
import {AggiungiPage} from "../aggiungi/aggiungi";
import {ModificaSistemaPage} from "../modifica-sistema/modifica-sistema";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'page-contact',
  templateUrl: 'setting.html'
})
export class SettingPage {

  pin: string;
  flag: boolean;
  sistema: System;
  listaSistemiSettings: Array<System>;
  listaSistemiNomiModifica = [];
  tmp: number = 0;
  nomeSistema: string;


  constructor(public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) {

    this.listaSistemiSettings = JSON.parse(localStorage.getItem("todos"));

    for (let i in this.listaSistemiSettings) {
      if (!isNullOrUndefined(this.listaSistemiSettings[i].nome)) {
        let nomeSistema = this.listaSistemiSettings[i].nome;
        this.listaSistemiNomiModifica[this.tmp] = nomeSistema;
        this.tmp = this.tmp + 1;
      }
    }
    console.log(this.listaSistemiNomiModifica);
  }


  registraPin() {
    console.log("Pin inserito " + this.pin);
    localStorage.setItem("pin", this.pin);
    let confirm = this.alertCtrl.create({
      title: 'Salvataggio Pin',
      subTitle: 'Pin salvato correttamente',
      buttons: ['OK']
    });
    confirm.present();
  }

  eliminaPin() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Conferma Eliminazione Pin ",
      buttons: [
        {
          text: 'Elimina',
          icon: 'remove-circle',
          handler: () => {
            // this.logout();
            // console.log('Logout clicked');
            localStorage.removeItem("pin");
            let confirm = this.alertCtrl.create({
              title: 'Eliminazione Pin',
              subTitle: 'Pin eliminato ',
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

  sendToAddSystem() {
    this.navCtrl.setRoot(AggiungiPage);
  }

  goToModifySystem(nome) {
    console.log("goToModifySystem " + this.listaSistemiSettings);
    for (let i in this.listaSistemiSettings) {
      if (this.listaSistemiSettings[i].nome === nome) {
        let sistemaDaModificare = this.listaSistemiSettings[i].nome;
        console.log("sistema da modificare: " + sistemaDaModificare);
        this.navCtrl.push(ModificaSistemaPage, {
          sistema: nome
        });
      }
    }
  }

  restart() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Conferma Ripristino App",
      buttons: [
        {
          text: 'Ripristina',
          icon: 'refresh',
          handler: () => {
            // this.logout();
            // console.log('Logout clicked');
            localStorage.clear();
            let confirm = this.alertCtrl.create({
              title: 'Rispristino App',
              subTitle: 'App ripristinata , riavviare la app ',
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
