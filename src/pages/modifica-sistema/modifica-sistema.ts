import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {System} from "../../model/System";
import {HomePage} from "../home/home";

/**
 * Generated class for the ModificaSistemaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifica-sistema',
  templateUrl: 'modifica-sistema.html',
})
export class ModificaSistemaPage {

  nomeSistemaModifica: string;
  listaSistemiModificaSistema: Array<System>;
  sistemaDaModificare: System;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nomeSistemaModifica = this.navParams.get("sistema");
    console.log("Costruttore Modifica " + this.nomeSistemaModifica)
    this.listaSistemiModificaSistema = JSON.parse(localStorage.getItem("todos"))
    for (let i in this.listaSistemiModificaSistema) {
      console.log(i);
      if (this.listaSistemiModificaSistema[i].nome === this.nomeSistemaModifica) {
        this.sistemaDaModificare = this.listaSistemiModificaSistema[i];
        console.log("constructor Modifica Sistema " + this.sistemaDaModificare)
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificaSistemaPage');
    console.log("Nome Sistema da Modificare " + this.nomeSistemaModifica)

  }

  modifySystem() {
    for (let i in this.listaSistemiModificaSistema) {
      console.log(i);
      if (this.listaSistemiModificaSistema[i].nome === this.sistemaDaModificare.nome) {
        this.listaSistemiModificaSistema[i] = this.sistemaDaModificare;
        localStorage.setItem('todos', JSON.stringify(this.listaSistemiModificaSistema));
        this.navCtrl.setRoot(HomePage);
      }
    }
    console.log("Sistema modificato")
  }

  deleteSystem() {
    this.sistemaDaModificare.nome=null;
    this.sistemaDaModificare.numeroGSM=null;
    this.sistemaDaModificare.nomeComando1=null;
    this.sistemaDaModificare.testoComando1=null;
    this.sistemaDaModificare.nomeComando2=null;
    this.sistemaDaModificare.testoComando2=null;
    this.sistemaDaModificare.nomeComando3=null;
    this.sistemaDaModificare.testoComando3=null;
    this.sistemaDaModificare.nomeComando4=null;
    this.sistemaDaModificare.testoComando4=null;
    this.sistemaDaModificare.nomeComando5=null;
    this.sistemaDaModificare.testoComando5=null;
    this.sistemaDaModificare.nomeComando6=null;
    this.sistemaDaModificare.testoComando6=null;
    this.sistemaDaModificare.nomeComando7=null;
    this.sistemaDaModificare.testoComando7=null;
    this.sistemaDaModificare.nomeComando8=null;
    this.sistemaDaModificare.testoComando8=null;
    this.sistemaDaModificare.nomeComando9=null;
    this.sistemaDaModificare.testoComando9=null;
    this.sistemaDaModificare.nomeComando10=null;
    this.sistemaDaModificare.testoComando10=null;

    for (let i in this.listaSistemiModificaSistema) {
      console.log(i);
      if (this.listaSistemiModificaSistema[i].nome === this.sistemaDaModificare.nome) {
        this.listaSistemiModificaSistema[i] = this.sistemaDaModificare;
        localStorage.setItem('todos', JSON.stringify(this.listaSistemiModificaSistema));
        this.navCtrl.setRoot(HomePage);
      }
    }
    console.log("Sistema eliminato");
  }

}
