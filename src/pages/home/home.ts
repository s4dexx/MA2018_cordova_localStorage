import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  storage: any;
  usernameOutput: any;
  passwordOutput: any;
  usernameInput: any;
  passwordInput: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.storage = window.localStorage;
  }

  storeMyData() {
    this.storage.setItem("username", this.usernameInput);
    this.storage.setItem("password", this.passwordInput);
  }

  getMyData() {
    this.usernameOutput = this.storage.getItem("username");
    this.passwordOutput = this.storage.getItem("password");

    let alert = this.alertCtrl.create({
      title: 'Your saved data',
      subTitle: 'Username: ' + this.usernameOutput + '<br>' + 'Password: ' + this.passwordOutput,
      buttons: ['Okay']
    });
    alert.present();
  }
}

