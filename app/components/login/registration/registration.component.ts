import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import { ErrorMessage } from './../../error-message/error-message';
import firebase = require('nativescript-plugin-firebase');

@Component({
    moduleId: module.id,
    selector: "registration",
    templateUrl: "registration.component.html",
    styleUrls: ["registration.component.css"]
})
export class RegistrationComponent {
    public form: any = {};
    public isLoading: boolean = false;

    public constructor(private router: RouterExtensions, private page: Page) {
        page.actionBarHidden = true;
    }

    public onRegister() {
        this.isLoading = true;
        firebase.createUser({
            email: this.form.email,
            password: this.form.password
        }).then(user => {
            this.isLoading = false;
            ErrorMessage.show("Створено нового користовача!");
            this.router.navigate(['']);
        }).catch(error => {
            this.isLoading = false;
            ErrorMessage.show(error);
        });
    }
}