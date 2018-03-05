import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import firebase = require('nativescript-plugin-firebase');
import { User } from 'nativescript-plugin-firebase';

import { Config } from '../../common/config';

@Component({
  moduleId: module.id,
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})

export class LoginComponent {
  public isLoading: boolean = false;
  public form: any = {};

  constructor(private router: RouterExtensions, private page: Page) {
    page.actionBarHidden = true;
  }

  private login() {
    this.isLoading = true;
    firebase.login({
        type: firebase.LoginType.PASSWORD, 
        email: this.form.email,
        password: this.form.password
    })
    .then((user) => {
        this.isLoading = false;
        Config.saveAllUserInfo(user);
        alert("Welcome" + " " + `${user.email}`);
    }, (error) => {
        this.isLoading = false;
        alert("Error: " + error);
    });
  }
}