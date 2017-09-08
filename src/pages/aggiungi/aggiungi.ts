import {Component} from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';
import {System} from "../../model/System";
import {SettingPage} from "../setting/setting";
import {HomePage} from "../home/home";


/**
 * Generated class for the AggiungiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-aggiungi',
  templateUrl: 'aggiungi.html',
})
export class AggiungiPage {

  sistemaDaInserire: System = new System();
  listaSistemi = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.listaSistemi = JSON.parse(localStorage.getItem('sistemi'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AggiungiPage');
  }

  saveSystem() {
    this.listaSistemi = JSON.parse(localStorage.getItem('sistemi'));
    this.listaSistemi.push(this.sistemaDaInserire);
    localStorage.setItem('sistemi', JSON.stringify(this.listaSistemi));
    this.navCtrl.setRoot(HomePage);
  }

  comeBack() {
    this.navCtrl.setRoot(SettingPage);
  }
}
