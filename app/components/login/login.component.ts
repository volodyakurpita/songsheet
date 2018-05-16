import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import firebase = require('nativescript-plugin-firebase');
import { User } from 'nativescript-plugin-firebase';
import { ErrorMessage } from './../error-message/error-message';
import { Config } from '../../common/config';
import { Button } from 'tns-core-modules/ui/button/button';

@Component({
  moduleId: module.id,
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})

export class LoginComponent {
  public isLoading: boolean = false;
  public form: any = {};

  @ViewChild("loginBtn") loginBtn: ElementRef;

  constructor(private router: RouterExtensions, private page: Page) {
    page.actionBarHidden = true;
  }

  onTextChange(args) {
    if (this.form.text != "") {
      (this.loginBtn.nativeElement as Button).isEnabled = true;
    } else {
      (this.loginBtn.nativeElement as Button).isEnabled = false;
    }
  }

  private login() {
    this.isLoading = true;
    firebase.login({
      type: firebase.LoginType.PASSWORD, 
      passwordOptions: {
        email: this.form.email,
        password: this.form.password
      }
    }).then((user) => {
        this.isLoading = false;
        Config.saveAllUserInfo(user);
        this.router.navigate(["/tabs"]);
    }).catch(error => {
        this.isLoading = false;
        ErrorMessage.show(error);
    });
  }
}